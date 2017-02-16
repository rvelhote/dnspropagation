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
	"log"
	"net"
	"net/http"
	"net/url"
)

var (
	ErrInvalidDomain       = errors.New("You have sent an invalid domain. Please check your input.")
	ErrInvalidRecord       = errors.New("You have specified an invalid DNS record type. Please check your input.")
	ErrInvalidHost         = errors.New("You have made your request from an unknown Origin.")
	ErrMissingOriginHeader = errors.New("Missing 'Origin' HTTP header")
)

type WebsocketRequest struct {
	Domain     string `json:"domain"`
	RecordType string `json:"type"`
}

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

func ValidateOrigin(origin string) (bool, error) {
	if len(origin) == 0 {
		return false, ErrMissingOriginHeader
	}

	parsedURL, parserr := url.Parse(origin)
	if parserr != nil {
		return false, parserr
	}

	host, _, spliterr := net.SplitHostPort(parsedURL.Host)

	if spliterr != nil {
		return false, spliterr
	}

	// TODO Make this value configurable in a file or something!
	if host != "127.0.0.1" {
		return false, ErrInvalidHost
	}

	return true, nil
}

func CheckOrigin(req *http.Request) bool {
	validated, err := ValidateOrigin(req.Header.Get("Origin"))

	if err != nil {
		log.Println(err)
	}

	return validated
}
