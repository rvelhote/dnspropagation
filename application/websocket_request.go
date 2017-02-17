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
	"net/http"
	"net/url"
	"strings"
)

var (
	// ErrInvalidDomain is the error message that specifies an invalid input domain
	ErrInvalidDomain = errors.New("You have sent an invalid domain. Please check your input")

	// ErrInvalidRecord is the error message that specifies that an invalid DNS record type was used
	ErrInvalidRecord = errors.New("You have specified an invalid DNS record type. Please check your input")

	// ErrInvalidHost is the error message that specified that an invalid host was set in the Origin Header
	ErrInvalidHost = errors.New("You have made your request from an unknown Origin")

	// ErrMissingOriginHeader is the error message that specified that an empty/missing origin header was sent
	ErrMissingOriginHeader = errors.New("Missing 'Origin' HTTP header")
)

// WebsocketRequest is the structure that holds the values passed as JSON from the frontend app through the WebSocket
type WebsocketRequest struct {
	Domain     string `json:"domain"`
	RecordType string `json:"type"`
}

// Validate performs the validation of the client-side values sent through the WebSocket
func (r *WebsocketRequest) Validate() error {
	// TODO Improve domain validation!
	if len(r.Domain) == 0 {
		return ErrInvalidDomain
	}

	if !IsRecordValid(r.RecordType) {
		return ErrInvalidRecord
	}

	return nil
}

// ValidateOrigin validates the origin header sent by the browser/client that is using the application
// TODO Make the valid origin host (or hosts) configurable in the configuration file
// FIXME This function does not please me yet. Validate the URL more thoroughly (although it can be faked so might not matter)
func ValidateOrigin(origin string) (bool, error) {
	if len(origin) == 0 {
		return false, ErrMissingOriginHeader
	}

	parsedURL, parserr := url.Parse(origin)
	if parserr != nil {
		return false, parserr
	}

	if !strings.Contains(parsedURL.Host, "127.0.0.1") {
		return false, ErrInvalidHost
	}

	return true, nil
}

// CheckOrigin takes the original not-upgraded HTTP request and validates the origin header. It was created mostly as
// convinience to avoid having inline functions in the struct declaration.
func CheckOrigin(req *http.Request) bool {
	validated, _ := ValidateOrigin(req.Header.Get("Origin"))
	return validated
}
