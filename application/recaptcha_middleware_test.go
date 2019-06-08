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
	"net/http/httptest"
	"testing"
)

const reCaptchaTestResponse = "03AHJ_VutING-ky641XG-W15BMWlC31rMqgdxuAFji7Pqk1o6jqBF20CfKSTknHDlXLQlVgleevn5HTHsldBinf78xGvNYAX-gIXSzOX7aQBBTvNAY7o4SlLzUzEEC3AXNTqxz76ueA4bx2-0BHN5gfTG2vUBpktWKa7BOsJLPgAS9b2IidWB41UUccQl7pEs9H28qUKXGYRnKZFECk23jcjqMPkvDVTFASctPXC3a40YtiYB2bzY7LfqDeaqYH0_nJf0BcY_SZfhQJetE6KPhL9bocIOgcWRoZQ8b0eXKHClMfbHRTCfu10k0Eu1gzx3T992KoQ643C_YPPj2VasIDiNx1FEX_5Yvs2jzSYjRy2jyAtVtNEUSKhFoEd3pwGJJtx7eh6FbYcbAWZKZTuWejmGzpAQaB6fMuD5ykY1AIFYiYjFFXjks_K3ZICH4pmU6WFUDUDVUxiT28-OVWCtYr7X_s0Ce9fQ6L9tZINVaaZeqazzuxfeNxYI66PEV2nMVUjcBTwrLdVtaWjoH9S3Cpc9xoXZZe3dtfXkw2nyhK6CFehEoKOBi96HepA5cY1YWUbAeJMIYoEp-lla6OmENGhrkLN28mUHF-iH68fe2LxwkhCGMic09GVOOXE5TUFhspvIHfgoOBE4-s1j4AWezUP2hniuJClPsO6xxiAQgIqA2dy0_NNKLI3Cyb3dTIFd8yv26U7kSJUGxmjI4BHlRxoNXniBuf854UX820VpIFr-oXkJj0GoqBAcrlgucq8PsjuPOCdHoh8u2zTYFitxppqDR1NP4wzdVoKuZ-BVhQkJ1C3IsfrAkLyesFfF5y8KQFo1smzhMnHmEiMLRDWe9y9hhd3CpkNdofvedcaE6PJ_l-dH8hdmhS_PgSaZPHGM3Wym2U3xICD2Yde1BWp1Imik6eM43OkYJfP6sh_IdX38cWi74B3RfCA_Na1Tci3_24cuEs8IfBHeQnxgN7V5FGL204ZLFffeGIxmXlbInAeZgFEqJw3YjQfu4lbddYXTKOE6WJZcKmRSjXazt8ZXaxKJ_0SefI7udyg"

// NoopHTTPHandler exists only to satisfy the reCAPTCHA middleware passing the request
type NoopHTTPHandler struct{}

func (f NoopHTTPHandler) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	w.WriteHeader(200)
}

// NoopHTTPForbiddenHandler exists only to satisfy the reCAPTCHA middleware passing the request
type NoopHTTPForbiddenHandler struct{}

func (f NoopHTTPForbiddenHandler) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	w.WriteHeader(403)
}

// FIXME This test will likely never fail because the Recaptcha API will always return
func TestRecaptchaMiddlewareForbiddenStatus(t *testing.T) {
	config, _ := LoadConfiguration("../conf/configuration.json")
	middleware := RecaptchaMiddleware{Configuration: config, SecureCookie: generateGorillaSecureCookie()}

	req, err := http.NewRequest("GET", "/", nil)
	if err != nil {
		t.Fatal(err)
	}

	rr := httptest.NewRecorder()
	handler := http.Handler(middleware.Middleware(NoopHTTPForbiddenHandler{}))

	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusForbidden {
		t.Errorf("handler did not not return the correct status code -- %v -- vs -- %v --", status, http.StatusForbidden)
	}
}

func TestRecaptchaMiddleware200Status(t *testing.T) {
	configuration, _ := LoadConfiguration("../conf/configuration.json")
	middleware := RecaptchaMiddleware{Configuration: configuration, SecureCookie: generateGorillaSecureCookie()}

	req, _ := http.NewRequest("GET", "/?c="+reCaptchaTestResponse, nil)
	handler := http.Handler(middleware.Middleware(NoopHTTPHandler{}))

	rr := httptest.NewRecorder()
	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler did not not return the correct status code -- %v -- vs -- %v --", status, http.StatusOK)
	}
}

func TestRecaptchaMiddlewareDisplayRecaptcha(t *testing.T) {
	configuration, _ := LoadConfiguration("../conf/configuration.json")
	c := &http.Cookie{Name: configuration.Cookie.Name}

	req1, _ := http.NewRequest("GET", "/", nil)
	req1.AddCookie(c)

	if DisplayRecaptcha(req1) != false {
		t.Error("The reCAPTCHA cookie should be set in this request and the reCATPCHA should not be displayed")
	}

	req2, _ := http.NewRequest("GET", "/", nil)
	if DisplayRecaptcha(req2) != true {
		t.Error("The reCAPTCHA is not set in this request and the reCAPTCHA should be displayed")
	}
}
