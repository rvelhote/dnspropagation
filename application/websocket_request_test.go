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
	"net/http"
	"testing"
)

const testEmptyOrigin = ""
const testBadOrigin = ":80"
const testUnauthorizedOrigin = "http://golang.org"
const testValidAndAuthorizedOriginURL = "http://127.0.0.1:80/"
const testValidAndAuthorizedOriginDomain = "http://127.0.0.1"

func TestWebsocketRequest_Validate(t *testing.T) {
	request := WebsocketRequest{Domain: "golang.org", RecordType: "a"}
	err := request.Validate()

	if err != nil {
		t.Error("The validation should have passed!")
	}
}

func TestWebsocketRequest_EmptyDomain(t *testing.T) {
	request := WebsocketRequest{Domain: "", RecordType: "a"}
	err := request.Validate()

	if err == nil || (err != nil && err != ErrInvalidDomain) {
		t.Error("The domain should be considered invalid!")
	}
}

func TestWebsocketRequest_EmptyRecord(t *testing.T) {
	request := WebsocketRequest{Domain: "golang.org", RecordType: ""}
	err := request.Validate()

	if err == nil || (err != nil && err != ErrInvalidRecord) {
		t.Error("The record type should be considered invalid!")
	}
}

func TestWebsocketRequest_InvalidRecord(t *testing.T) {
	request := WebsocketRequest{Domain: "golang.org", RecordType: "ABC"}
	err := request.Validate()

	if err == nil || (err != nil && err != ErrInvalidRecord) {
		t.Error("The record type should be considered invalid!")
	}
}

func TestWebsocketRequestOriginValidation(t *testing.T) {
	if ok, _ := ValidateOrigin(testEmptyOrigin); ok != false {
		t.Error("An empty origin should result in an error")
	}

	if ok, _ := ValidateOrigin(testBadOrigin); ok != false {
		t.Error("An invalid URL should result in an error")
	}

	if ok, _ := ValidateOrigin(testUnauthorizedOrigin); ok != false {
		t.Error("An unauthorized origin should result in an error")
	}

	if ok, err := ValidateOrigin(testValidAndAuthorizedOriginURL); ok != true {
		t.Log(err)
		t.Error("A valid and authorized URL should not result in an error")
	}

	if ok, err := ValidateOrigin(testValidAndAuthorizedOriginDomain); ok != true {
		t.Log(err)
		t.Error("A valid and authorized domain should not result in an error")
	}
}

func TestWebsocketOriginHeader(t *testing.T) {
	req, _ := http.NewRequest("GET", "/", nil)
	req.Header.Add("Origin", "http://127.0.0.1:8080")
	if CheckOrigin(req) != true {
		t.Error("The Origin header is set and is valid so it should not be invalid")
	}

	req2, _ := http.NewRequest("GET", "/", nil)
	if CheckOrigin(req2) != false {
		t.Error("The Origin was not set so it shouldn't be a valid request")
	}
}
