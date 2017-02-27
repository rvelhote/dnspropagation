// Package application contains the server-side application code.
package application

import (
	"encoding/base64"
	"github.com/gorilla/securecookie"
	"net/http"
	"testing"
)

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
const cookieName = "recaptcha"
const testHashKey = "RovMQmutMbSogUuGQFZYLb37jwgwFNuMR7wrEz9EILQ9W039UHCFlCfkpX1EbecktHA563XX+7clPRinBPeaeQ=="
const testBlockKey = "+sSXCAbwswiYNqHx4zCuJJTD3hmRQp4f4uJKy+aFL70="

func generateGorillaSecureCookie() *securecookie.SecureCookie {
	hashKey, _ := base64.StdEncoding.DecodeString(testHashKey)
	blockKey, _ := base64.StdEncoding.DecodeString(testBlockKey)
	return securecookie.New(hashKey, blockKey)
}

func TestNewSecureRecaptchaCookie(t *testing.T) {
	secureRecaptchaCookie1 := NewSecureRecaptchaCookie(cookieName, nil, generateGorillaSecureCookie())
	if secureRecaptchaCookie1.Name != cookieName || len(secureRecaptchaCookie1.Value) != 0 {
		t.Error("The new secure cookie based on an empty cookie should have no value")
	}

	validCookie := &http.Cookie{Value: "Some Value"}
	secureRecaptchaCookie2 := NewSecureRecaptchaCookie(cookieName, validCookie, generateGorillaSecureCookie())
	if secureRecaptchaCookie2.Name != cookieName || len(secureRecaptchaCookie2.Value) == 0 {
		t.Error("The new secure cookie based on a valid cookie should have a value")
	}
}

func TestSecureRecaptchaCookie_Encode(t *testing.T) {
	validCookie := &http.Cookie{Value: "Some Value"}

	secureRecaptchaCookie := NewSecureRecaptchaCookie(cookieName, validCookie, generateGorillaSecureCookie())
	secureRecaptchaCookie.Value = secureRecaptchaCookie.Encode(validCookie.Value)

	if secureRecaptchaCookie.IsValid(validCookie.Value) != true {
		t.Error("The cookie value should have been encoded and decoded correctly")
	}
}
