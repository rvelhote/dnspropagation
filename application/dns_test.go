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

const badDomain = "goooolang.org"
const domain = "golang.org"
const record = "a"

var server = Server{Server: "8.8.4.4"}

// TODO Mock the DNS requests!
// TODO Test for the content of the DNS answer
func TestDnsQuery_Query(t *testing.T) {
	instance := DnsQuery{Domain: domain, Record: record, Server: server}
	records, _, err := instance.Query()

	if err != nil {
		t.Error("There should be no errors in this request (unless of course the server is down)")
	}

	if len(records) != 1 {
		t.Errorf("Response should have returned a single record. It returned %d", len(records))
	}
}

func TestDnsQuery_QueryBadDomain(t *testing.T) {
	instance := DnsQuery{Domain: badDomain, Record: record, Server: server}
	records, _, err := instance.Query()

	if err == nil {
		t.Error("There should be an errors in this request")
	}

	if err != nil && err != ErrNoRecords {
		t.Errorf("The function should have returned -- %s -- but it returned -- %s --", ErrNoRecords.Error(), err.Error())
	}

	if len(records) != 0 {
		t.Errorf("Response should have returned a single record. It returned %d", len(records))
	}
}

func TestDnsQuery_GetResponse(t *testing.T) {
	query := DnsQuery{Domain: domain, Record: record, Server: server}
	response := query.GetResponse()

	if len(response.Message) != 0 {
		t.Error("There should be no errors in this valid request")
	}

	if response.Server != server {
		t.Error("The server returned in the response shouldn't be different from the original")
	}

	if response.Records.Type != record {
		t.Errorf("The record returned in the response -- %s -- is different from the one that should have been sent -- %s --", response.Records.Type, record)
	}

	if len(response.Records.Data) != 1 {
		t.Errorf("There are %d record in the response when there should only be 1 -- %s", len(response.Records.Data), response.Records)
	}
}

func TestDnsQuery_GetResponseWithMessage(t *testing.T) {
	query := DnsQuery{Domain: domain, Record: "PTR", Server: server}
	response := query.GetResponse()

	if len(response.Message) == 0 {
		t.Error("There should be a message in this request but nothing was returned")
	}
}

func TestDnsQuery_RecordValidation(t *testing.T) {
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
}
