// Package application contains the server-side application code.
package application

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
import (
	"errors"
	"github.com/miekg/dns"
	"strings"
	"time"
	"github.com/miekg/dns/idn"
)

var RecordTypes = map[string]uint16{
	"a":     dns.TypeA,
	"aaaa":  dns.TypeAAAA,
	"mx":    dns.TypeMX,
	"cname": dns.TypeCNAME,
	"srv":   dns.TypeSRV,
	"soa":   dns.TypeSOA,
	"txt":   dns.TypeTXT,
	"ptr":   dns.TypePTR,
	"ns":    dns.TypeNS,
	"caa":   dns.TypeCAA,
}

var ErrNoRecords = errors.New("This server has no records for the type you specified")
var ErrBadRecordType = errors.New("You have specified a record type that does not exist")

type DnsRecord struct {
	Type string
	Data []dns.RR
}

type ResponseError struct {
	Error string
}

type Response struct {
	Server   Server
	Duration string
	Message  string
	Records  DnsRecord
}

type DnsQuery struct {
	Servers []Server
}

func normalizeRecord(record string) string {
	return strings.ToLower(record)
}

func IsRecordValid(record string) bool {
	return RecordTypes[normalizeRecord(record)] != 0
}

func GetRecordType(record string) uint16 {
	return RecordTypes[normalizeRecord(record)]
}

func normalizeDomain(domain string, record string) string {
    record = normalizeRecord(record)

    domain = strings.ToLower(domain);
    domain = idn.ToPunycode(domain)

    if record == "ptr" && !strings.Contains(domain, ".arpa") {
        domain, _ = dns.ReverseAddr(domain)
    }

    return dns.Fqdn(domain);
}

func rawQuery(domain string, record string, server Server) ([]dns.RR, time.Duration, error) {
	if !IsRecordValid(record) {
		return []dns.RR{}, time.Second, ErrBadRecordType
	}

    domain = normalizeDomain(domain, record)

	message := dns.Msg{}
	message.SetQuestion(domain, GetRecordType(record))

	client := dns.Client{Timeout: time.Second * 10}
	response, duration, err := client.Exchange(&message, server.Server+":53")

	if err != nil {
		return []dns.RR{}, duration, err
	}

	if len(response.Answer) == 0 {
		return []dns.RR{}, duration, ErrNoRecords
	}

	return response.Answer, duration, nil
}

func Query(domain string, record string, server Server) Response {
	answers, duration, err := rawQuery(domain, record, server)

	response := Response{Server: server, Duration: duration.String()}
	response.Records.Type = record
	response.Records.Data = answers

	if err != nil {
		response.Message = err.Error()
	}

	return response
}

func (d *DnsQuery) QueryAllAsync(domain string, record string) <-chan Response {
	queryChannel := make(chan Response, len(d.Servers))

	for _, server := range d.Servers {
		go func(qc chan Response, server Server) {
			qc <- Query(domain, record, server)
		}(queryChannel, server)
	}

	return queryChannel
}

func (d *DnsQuery) QueryAll(domain string, record string) []Response {
    responses := make([]Response, len(d.Servers))

    for _, server := range d.Servers {
        responses = append(responses, Query(domain, record, server))
    }

    return responses
}
