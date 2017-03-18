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
	"github.com/gorilla/websocket"
	"github.com/rvelhote/go-public-dns"
	"net/http"
	"net/http/httptest"
	"net/url"
	"strings"
	"testing"
)

func TestIndexHandler(t *testing.T) {
	req, err := http.NewRequest("GET", "/", nil)
	if err != nil {
		t.Fatal(err)
	}

	configuration, _ := LoadConfiguration("../conf/configuration.json")
	indexHandler := IndexRequestHandler{Configuration: configuration}

	rr := httptest.NewRecorder()
	handler := http.Handler(indexHandler)

	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler did not not return the correct status code -- %v -- vs -- %v --", status, http.StatusOK)
	}

	expected := `<main id="app"></main>`
	if strings.Contains(expected, rr.Body.String()) {
		t.Error("the response should contain a <main> html tag")
	}
}

// TODO Improve this thing!
func makeWebSocketRequest(path string, withOrigin bool) (*websocket.Conn, *http.Response, *httptest.Server) {
	//
	dialer := websocket.Dialer{}

	config := Configuration{Servers: []*publicdns.Nameserver{testServer}}
	queryHandler := QueryRequestHandler{Configuration: config}

	http.Handle(path, queryHandler)
	server := httptest.NewServer(nil)

	header := http.Header{"Origin": []string{"http://127.0.0.99:8080"}}
	if withOrigin {
		header = http.Header{"Origin": []string{"http://127.0.0.1:8080"}}
	}

	urlll := &url.URL{Host: server.Listener.Addr().String(), Scheme: "ws", Path: path}
	conn, httpResp, _ := dialer.Dial(urlll.String(), header)

	return conn, httpResp, server
}

func TestWebsocketHandler(t *testing.T) {
	conn, _, server := makeWebSocketRequest("/api/v1/query", true)

	defer conn.Close()
	defer server.Close()

	conn.WriteJSON(WebsocketRequest{Domain: "golang.org", RecordType: "a"})

	response := Response{}
	conn.ReadJSON(&response)

	if len(response.Records.Data) == 0 {
		t.Error("The WebSocket should have replied with some DNS Records but the response data was empty")
	}
}

func TestWebsocketHandlerFailedDomainValidation(t *testing.T) {
	conn, _, server := makeWebSocketRequest("/api/v2/query", true)

	defer conn.Close()
	defer server.Close()

	conn.WriteJSON(WebsocketRequest{Domain: "", RecordType: "a"})

	responseError := ResponseError{}
	conn.ReadJSON(&responseError)

	if responseError.Error != ErrInvalidDomain.Error() {
		t.Errorf("The WebSocket should have replied with -- %s -- but it replied -- %s --", ErrInvalidDomain, responseError.Error)
	}
}

func TestWebsocketHandlerFailedRecordValidation(t *testing.T) {
	conn, _, server := makeWebSocketRequest("/api/v3/query", true)

	defer conn.Close()
	defer server.Close()

	conn.WriteJSON(WebsocketRequest{Domain: "golang.org", RecordType: "XYZT"})

	responseError := ResponseError{}
	conn.ReadJSON(&responseError)

	if responseError.Error != ErrInvalidRecord.Error() {
		t.Errorf("The WebSocket should have replied with -- %s -- but it replied -- %s --", ErrInvalidRecord, responseError.Error)
	}
}

func TestWebsocketHandlerBadOrigin(t *testing.T) {
	conn, response, server := makeWebSocketRequest("/api/v4/query", false)
	defer server.Close()

	if conn != nil {
		t.Error("There should not be a connection from the WebSocket request but there is one")
	}

	if response.StatusCode != 403 {
		t.Errorf("The server returned HTTP Status Code -- %d -- but it should have returned a 403", response.StatusCode)
	}
}

func TestInit(t *testing.T) {
	configuration, _ := LoadConfiguration("../conf/configuration.json")
	mux := http.NewServeMux()
	Init(mux, configuration)
}
