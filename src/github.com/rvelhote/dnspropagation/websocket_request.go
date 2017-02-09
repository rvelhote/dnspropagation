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
package dnspropagation

import (
    "errors"
)

var (
    ErrInvalidDomain = errors.New("You have sent an invalid domain. Please check your input.")
    ErrInvalidRecord = errors.New("You have specified an invalid DNS record type. Please check your input.")
)

type WebsocketRequest struct {
    Domain     string `json:"domain"`
    RecordType string `json:"type"`
}

func (r *WebsocketRequest) Validate() error {
    if len(r.Domain) == 0 {
        return ErrInvalidDomain
    }

    if len(r.RecordType) == 0 || RecordTypes[r.RecordType] == 0 {
        return ErrInvalidRecord
    }

    return nil
}
