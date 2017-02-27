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
	"context"
	"github.com/gorilla/securecookie"
	"github.com/rvelhote/go-recaptcha"
	"net/http"
)

// cookieName specifies the cookie name that will hold the verification of wether the reCAPTCHA passed or not.
//const cookieName = "reCAPTCHA"

// Cookie is a single instance of the reCAPTCHA cookie to avoid instantiation
// FIXME We will want to set an expire date so clearly this won't work :P
//var Cookie = &http.Cookie{Name: cookieName, Value: "1", HttpOnly: true, Path: "/"}

// RecaptchaMiddleware will allow us to chain the reCAPTCHA validation into the request processing
type RecaptchaMiddleware struct {
	// Configuration holds the application configuration. In this context only the reCAPTCHA configuration is used
	Configuration Configuration

	// SecureCookie holds the instance that will be used to encode and decode a cookie's value
	SecureCookie *securecookie.SecureCookie
}

// Middleware will perform the validation of reCAPTCHA challenge that the user should solve before passing
// control to the actual function that processes the full request and returns the result.
// TODO Improve the SecureCookie handling
func (m *RecaptchaMiddleware) Middleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		cookie, _ := r.Cookie(m.Configuration.Cookie.Name)
		secureCookie := NewSecureRecaptchaCookie(m.Configuration.Cookie.Name, cookie, m.SecureCookie)

		if !secureCookie.IsValid(r.UserAgent()) {
			challenge := r.URL.Query().Get("c")

			catpcha := recaptcha.Recaptcha{PrivateKey: m.Configuration.Recaptcha.PrivateKey}
			recaptchaResponse, _ := catpcha.Verify(challenge, r.RemoteAddr)

			if recaptchaResponse.Success == false {
				w.WriteHeader(403)
				return
			}
		}

		// FIXME We are generating a new cookie per request and thus avoiding a context check in the next function.
		// FIXME Perhaps the encoding could be done automatically?
		secureCookie.Value = secureCookie.Encode(r.UserAgent())

		ctx := context.WithValue(r.Context(), "recaptcha", secureCookie.String())
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

// DisplayRecaptcha verifies if the request contains a valid application reCAPTCHA cookie
// TODO Make this work with ReadCookie in the middleware
func DisplayRecaptcha(req *http.Request) bool {
	_, err := req.Cookie("reCAPTCHA")

	if err != nil {
		return true
	}

	return false
}
