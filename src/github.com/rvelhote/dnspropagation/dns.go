/*
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
package dnspropagation

import (
	"github.com/miekg/dns"
	"time"
)

type ResponsePayload struct {
	Domain        string
	RecordType    string
	DnsServerData []DnsServerData
}

type DnsServerData struct {
	RecordType string
	Server     Server
	Duration   string
	Message    string
	DnsRecords []dns.RR
}

type WebsocketRequest struct {
	Domain     string `json:"domain"`
	RecordType string `json:"type"`
}

var RecordTypes = map[string]uint16{
	"A":     dns.TypeA,
	"AAAA":  dns.TypeAAAA,
	"MX":    dns.TypeMX,
	"CNAME": dns.TypeCNAME,
	"SRV":   dns.TypeSRV,
	"SOA":   dns.TypeSOA,
	"TXT":   dns.TypeTXT,
	"PTR":   dns.TypePTR,
	"NS":    dns.TypeNS,
	"CAA":   dns.TypeCAA,
}

type DnsQuery struct {
	Domain string
	Record uint16
	Server string
}

func (d *DnsQuery) Query() DnsServerData {
	serverData := DnsServerData{DnsRecords: nil, Message: "", Duration: ""}
	client := dns.Client{}
	client.Timeout = time.Second * 10

	message := dns.Msg{}
	message.SetQuestion(d.Domain + ".", d.Record)

	response, duration, err := client.Exchange(&message, d.Server + ":53")

	if err != nil {
		serverData.Message = err.Error()
		return serverData
	}

	if len(response.Answer) == 0 {
		serverData.Message = "This server has no records for the type you specified."
	}

	serverData.Duration = duration.String()
	serverData.DnsRecords = response.Answer

	return serverData
}