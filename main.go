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
package main

import (
	"github.com/gorilla/websocket"
	"html/template"
	"log"
	"net/http"
	"github.com/rvelhote/dnspropagation"
)

type WebsocketRequest struct {
    Domain     string `json:"domain"`
    RecordType string `json:"type"`
}



func index(w http.ResponseWriter, req *http.Request) {
	w.Header().Add("Content-Type", "text/html")
	t, _ := template.New("index.html").ParseFiles("templates/index.html")
	t.Execute(w, map[string]string{"Title": "Check DNS Propagation Worldwide"})
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:    4096,
	WriteBufferSize:   4096,
	EnableCompression: true,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func query(w http.ResponseWriter, req *http.Request, configuration []dnspropagation.Server) {
	conn, _ := upgrader.Upgrade(w, req, nil)

	websocketreq := WebsocketRequest{}
	conn.ReadJSON(&websocketreq)

	if len(websocketreq.Domain) == 0 {
		log.Print("Empty domain")
	}

	if len(websocketreq.RecordType) == 0 || dnspropagation.RecordTypes[websocketreq.RecordType] == 0 {
		log.Print("Invalid DNS record specified")
	}

	sem := make(chan dnspropagation.Response, len(configuration))

	for _, server := range configuration {
		go func(server dnspropagation.Server, conn *websocket.Conn) {
			request := dnspropagation.DnsQuery{ Domain: websocketreq.Domain, Record: websocketreq.RecordType, Server: server }
			sem <- request.GetResponse()
		}(server, conn)
	}

	for i := 0; i < len(configuration); i++ {
		conn.WriteJSON(<-sem)
	}

	conn.Close()
}

func main() {
	servers, _ := dnspropagation.LoadConfiguration("conf/servers.json")

	fs := http.FileServer(http.Dir("assets"))
	http.Handle("/assets/", http.StripPrefix("/assets/", fs))

	http.HandleFunc("/", index)

	http.HandleFunc("/api/v1/query", func(w http.ResponseWriter, req *http.Request) {
		query(w, req, servers)
	})

	http.ListenAndServe(":8080", nil)
}
