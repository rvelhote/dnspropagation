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
	"github.com/miekg/dns"
	"testing"
)

const testBadDomain = "goooolang.org"
const testDomain = "golang.org"
const testFQDNDomain = "golang.org."
const testRecordType = "a"
const testBadRecordType = "AaAaAaA"
const testPTR = "ptr"
const testPTRIPv4Address = "1.0.0.127.in-addr.arpa."
const testPTRIPv6Address = "1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.f.2.1.b.0.a.0.8.b.d.0.1.0.0.2.ip6.arpa."

var testBadServer = Server{IpAddress: "127.0.0.1"}
var testServer = Server{IpAddress: "8.8.4.4"}
var testServers = []Server{testServer}
var testAsyncServers = []Server{testServer, testServer}

// TODO Mock the DNS requests!
// TODO Test for the content of the DNS answer
func TestRawQuery(t *testing.T) {
	answers, _, err := rawQuery(testDomain, testRecordType, testServer)

	if err != nil {
		t.Error(err)
	}

	if len(answers) != 1 {
		t.Errorf("Response should have returned a single record. It returned %d", len(answers))
	}
}

func TestRawQueryError(t *testing.T) {
	answers, _, err := rawQuery(testBadDomain, testRecordType, testServer)

	if err == nil {
		t.Error("There should be at least an error in this request")
	}

	if err != nil && err != ErrNoRecords {
		t.Errorf("The function should have returned -- %s -- but it returned -- %s --", ErrNoRecords, err)
	}

	if len(answers) != 0 {
		t.Errorf("Response should have returned a single record. It returned %d", len(answers))
	}
}

func TestRawQueryBadDnsServer(t *testing.T) {
	answers, _, err := rawQuery(testDomain, testRecordType, testBadServer)

	if err == nil {
		t.Error("There should be at least an error in this request")
	}

	if len(answers) != 0 {
		t.Error("There should be no answers with a bad DNS server")
		t.Log(answers)
	}

	t.Log(err)
}

func TestNormalizeDomain(t *testing.T) {
	domains := []string{"goLANG.ORG", "GOLANG.ORG", "golang.org", "  golang.ORG   ", "golaNG.oRg."}

	for _, domainToNormalize := range domains {
		normalized := normalizeDomain(domainToNormalize, testRecordType)
		if normalized != testFQDNDomain {
			t.Errorf("Normalized domain should have been -- %s -- and we got -- %s --", testFQDNDomain, normalized)
		}
	}

	normalizedIPv4 := normalizeDomain("127.0.0.1", testPTR)
	if normalizedIPv4 != testPTRIPv4Address {
		t.Errorf("Normalized domain should have been -- %s -- and we got -- %s --", testPTRIPv4Address, normalizedIPv4)
	}

	normalizedIPv6 := normalizeDomain("2001:db8:a0b:12f0::1", testPTR)
	if normalizedIPv6 != testPTRIPv6Address {
		t.Errorf("Normalized domain should have been -- %s -- and we got -- %s --", testPTRIPv6Address, normalizedIPv6)
	}
}

func TestRecordValidationAndNormalization(t *testing.T) {
	if IsRecordValid("A") != true {
		t.Error("Uppercase 'A' is a valid record type")
	}

	if IsRecordValid("a") != true {
		t.Error("Lowercase 'a' is a valid record type")
	}

	if IsRecordValid("AAAAA") == true {
		t.Error("'AAAAA' is not a valid record")
	}

	if GetRecordType("A") != dns.TypeA {
		t.Error("Uppercase Record 'A' should return dns.TypeA")
	}

	if GetRecordType("a") != dns.TypeA {
		t.Error("Lowercase record 'a' should return dns.TypeA")
	}

	if GetRecordType("AAAAA") != 0 {
		t.Error("Record 'AAAAA' does not exist and the return type should be zero")
	}

	if normalizeRecord("A") != testRecordType {
		t.Errorf("Record type not normalized correctly. It should be -- %s -- and it was -- %s --", testRecordType, normalizeRecord("A"))
	}

	if normalizeRecord("   AAAA     ") != "aaaa" {
		t.Errorf("Record type not normalized correctly. It should be -- %s -- and it was -- %s --", "aaaa", normalizeRecord("   AAAA     "))
	}
}

func TestQueryAll(t *testing.T) {
	query := DnsQuery{Servers: testServers}
	responses := query.QueryAll(testDomain, testRecordType)

	if len(responses) != 1 {
		t.Errorf("There should have been two responses. We got -- %d --", len(responses))
		t.Log(responses)
	}
}

func TestQueryAllErrorMessageNoRecords(t *testing.T) {
	query := DnsQuery{Servers: testServers}
	responses := query.QueryAll(testBadDomain, testRecordType)

	if len(responses) != 1 {
		t.Errorf("There should have been ONE response. We got -- %d --", len(responses))
		t.Log(responses)
	}

	if len(responses) == 1 && len(responses[0].Message) != 0 && responses[0].Message != ErrNoRecords.Error() {
		t.Errorf("There should have been the following error message -- %s -- instead we got -- %s --", ErrNoRecords, responses[0].Message)
		t.Log(responses[0].Message)
	}
}

func TestQueryAllErrorMessageBadRecordType(t *testing.T) {
	query := DnsQuery{Servers: testServers}
	responses := query.QueryAll(testDomain, testBadRecordType)

	if len(responses) != 1 {
		t.Errorf("There should have been ONE response. We got -- %d --", len(responses))
		t.Log(responses)
	}

	if len(responses) == 1 && len(responses[0].Message) != 0 && responses[0].Message != ErrBadRecordType.Error() {
		t.Errorf("There should have been the following error message -- %s -- instead we got -- %s --", ErrBadRecordType, responses[0].Message)
		t.Log(responses[0].Message)
	}
}

func TestQueryAllAsync(t *testing.T) {
	query := DnsQuery{Servers: testAsyncServers}
	responses := query.QueryAllAsync(testDomain, testRecordType)

	total := 0

	for _ = range testAsyncServers {
		<-responses
		total = total + 1
	}

	if total != 2 {
		t.Error("There should have been two channels returning the responses")
	}
}
