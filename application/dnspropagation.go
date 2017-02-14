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
	"html/template"
	"log"
	"net/http"
)

func index(w http.ResponseWriter, req *http.Request) {
	w.Header().Add("Content-Type", "text/html")
	t, err := template.New("index.html").ParseFiles("templates/index.html")

	if err != nil {
        t, _ = template.New("index.html").ParseFiles("../templates/index.html")
	}

	t.Execute(w, map[string]string{"Title": "Check DNS Propagation Worldwide"})
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:    4096,
	WriteBufferSize:   4096,
	EnableCompression: true,
	CheckOrigin: CheckOrigin,
}

type QueryRequestHandler struct {
	Configuration Configuration
}

func (q QueryRequestHandler) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	// TODO Use context with Go 1.7 to pass the cookie here and upgrade the connection. This is a bit dirty
	conn, upgraderr := upgrader.Upgrade(w, req, http.Header{"Set-Cookie": {Cookie.String()}})

	if upgraderr != nil {
		log.Println(upgraderr)
		return
	}

	websocketreq := WebsocketRequest{}
	conn.ReadJSON(&websocketreq)

	defer conn.Close()

    err := websocketreq.Validate()
	if err != nil {
		conn.WriteJSON(ResponseError{Error: err.Error()})
		return
	}

	sem := make(chan Response, len(q.Configuration.Servers))

	for _, server := range q.Configuration.Servers {
		go func(server Server) {
			request := DnsQuery{Domain: websocketreq.Domain, Record: websocketreq.RecordType, Server: server}
			sem <- request.GetResponse()
		}(server)
	}

	for _, _ = range q.Configuration.Servers {
		conn.WriteJSON(<-sem)
	}
}

func Init() {

	configuration, _ := LoadConfiguration("conf/configuration.json")

	queryHandler := QueryRequestHandler{ Configuration: configuration }
	captchaHandler := RecaptchaMiddleware{ Configuration: configuration }

	log.Println("Server list loaded!")

	fs := http.FileServer(http.Dir("assets"))
	http.Handle("/assets/", http.StripPrefix("/assets/", fs))

	http.HandleFunc("/", index)

	http.Handle("/api/v1/query", captchaHandler.Middleware(queryHandler))

	log.Println("Ready to server requests!")
	http.ListenAndServe(":8080", nil)
}
