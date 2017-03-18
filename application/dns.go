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
	"github.com/miekg/dns/idn"
	"github.com/rvelhote/go-public-dns"
	"net"
	"strings"
	"time"
)

// RecordTypes stores all the DNS record types supported by the application and maps them to their
// equivalent in the DNS library
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

var (
	// ErrNoRecords defines an error message for when the DNS server returned nothing
	ErrNoRecords = errors.New("This server has no records for the type you specified")

	// ErrBadRecordType defines an erros message for when the user doesn't specify a valid DNS Record Type
	ErrBadRecordType = errors.New("You have specified a record type that does not exist")
)

// Defines the standard DNS port for concatenation with the DNS IP Address
const port = "53"

// DNSRecord stores the records returned from querying a single DNS Server.
// It also stores the record type for the frontend.
type DNSRecord struct {
	Type string
	Data []dns.RR
}

// ResponseError is the default structure for responses to the client that only contain an error message
type ResponseError struct {
	Error string
}

// Response is the standard response struct after a successful DNS Query.
// It contains all the information about the server that was used in the query, the records returned, the duration
// and also an optional message which is usually an error message.
type Response struct {
	Server   *publicdns.Nameserver
	Duration string
	Message  string
	Records  DNSRecord
}

// DNSQuery allows us to query multiple DNS servers at the same time. It currently supports Sync and Async requests.
type DNSQuery struct {
	Servers []*publicdns.Nameserver
}

// normalizeRecord normalizes a DNS record type (i.e. trims spaces and forces lowercase)
func normalizeRecord(record string) string {
	return strings.TrimSpace(strings.ToLower(record))
}

// IsRecordValid checks if the record type passed as parameter is in the RecordTypes list
// The record name passed as parameter is normalized before trying to get it from RecordTypes.
func IsRecordValid(record string) bool {
	_, exists := RecordTypes[normalizeRecord(record)]
	return exists
}

// GetRecordType obtains the equivalent value from the DNS library by passing a string with the record name.
// The record name passed as parameter is normalized before trying to get it from RecordTypes.
func GetRecordType(record string) uint16 {
	return RecordTypes[normalizeRecord(record)]
}

// normalizeDomain normalizes a domain name into its FQDN form. The domain name also passes by a series of
// normalization processes which include: trimming, lowercase, punycode (for IDN names) and also, in case the record
// type is PTR it will return the reverse address.
func normalizeDomain(domain string, record string) string {
	record = normalizeRecord(record)

	domain = strings.TrimSpace(domain)
	domain = strings.ToLower(domain)
	domain = idn.ToPunycode(domain)

	if record == "ptr" {
		domain, _ = dns.ReverseAddr(domain)
	}

	return dns.Fqdn(domain)
}

// rawQuery abstracts the github.com/miekg/dns library and queries the specified DNS server for information about
// a domain and a record type. It will return all the answers from the server, the duration of the request and
// sometimes an error message.
func rawQuery(domain string, record string, server *publicdns.Nameserver) ([]dns.RR, time.Duration, error) {
	if !IsRecordValid(record) {
		return []dns.RR{}, time.Second, ErrBadRecordType
	}

	domain = normalizeDomain(domain, record)

	message := dns.Msg{}
	message.SetQuestion(domain, GetRecordType(record))

	client := dns.Client{Timeout: time.Second * 10}
	response, duration, err := client.Exchange(&message, net.JoinHostPort(server.IPAddress, port))

	if err != nil {
		return []dns.RR{}, duration, err
	}

	if len(response.Answer) == 0 {
		return []dns.RR{}, duration, ErrNoRecords
	}

	return response.Answer, duration, nil
}

// Query uses rawQuery obtain the raw data but returns a Response struct ready to send to the frontend.
// This func will only query a single server! To query multiple servers use QueryAllAsync or QueryAll
func Query(domain string, record string, server *publicdns.Nameserver) Response {
	answers, duration, err := rawQuery(domain, record, server)

	response := Response{Server: server, Duration: duration.String()}
	response.Records.Type = record
	response.Records.Data = answers

	if err != nil {
		response.Message = err.Error()
	}

	return response
}

// QueryAllAsync queries all the servers passed in the constructor asynchronously and returns the Response object
// via a channel.
//
// Sample Usage:
//   c := query.QueryAllAsync(websocketreq.Domain, websocketreq.RecordType)
//   for _, _ = range servers {
//     log.Println(<-c)
//   }
func (d *DNSQuery) QueryAllAsync(domain string, record string) <-chan Response {
	queryChannel := make(chan Response, len(d.Servers))

	for _, server := range d.Servers {
		go func(qc chan Response, server *publicdns.Nameserver) {
			qc <- Query(domain, record, server)
		}(queryChannel, server)
	}

	return queryChannel
}

// QueryAll queries all the servers passed in the constructor, synchronously and returns an array of Response objects-
func (d *DNSQuery) QueryAll(domain string, record string) []Response {
	responses := []Response{}

	for _, server := range d.Servers {
		responses = append(responses, Query(domain, record, server))
	}

	return responses
}
