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
	"github.com/gorilla/securecookie"
	"net/http"
	"time"
)

// SecureRecaptchaCookie is an extension of the regular http.Cookie struct with value encoding capabilities
type SecureRecaptchaCookie struct {
	*http.Cookie
	SecureCookie *securecookie.SecureCookie
}

// NewSecureRecaptchaCookie creates a SecureCookie instance based on a request cookie. If the cookie already exists
// its value is set in the SecureRecaptchaCookie struct otherwise it gets an empty value (which will fail verification)
func NewSecureRecaptchaCookie(name string, cookie *http.Cookie, config *securecookie.SecureCookie) *SecureRecaptchaCookie {
	secure := &http.Cookie{
		Name:     name,
		Path:     "/",
		HttpOnly: true,
		Expires:  time.Now().Add(24 * time.Hour),
	}

	if cookie != nil {
		secure.Value = cookie.Value
	}

	return &SecureRecaptchaCookie{Cookie: secure, SecureCookie: config}
}

// Encode the value passed as a parameter with the keys present in SecureCookie and returns it
func (cookie *SecureRecaptchaCookie) Encode(value string) string {
	encoded, _ := cookie.SecureCookie.Encode(cookie.Name, value)
	return encoded
}

// IsValid validates the current cookie value (after decoding it) against an expected original value
func (cookie *SecureRecaptchaCookie) IsValid(original string) bool {
	decoded := ""
	err := cookie.SecureCookie.Decode(cookie.Name, cookie.Value, &decoded)
	return err == nil && decoded == original
}
