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

// indexTemplateParams holds various values to be passed to the main template
type indexTemplateParams struct {
	Title string
	PublicKey string
	ShowRecaptcha bool
}

// QueryRequestHandler handles the requests to present the main url of the application
type IndexRequestHandler struct {
	// Configuration contains the app configuration. In this context only the server list is used.
	Configuration Configuration
}

// ServeHTTP handles the request made to the homepage of the app. It will only serve the required files to start
// the RectJS app as well as some important configuration.
func (i IndexRequestHandler) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	w.Header().Add("Content-Type", "text/html")
	t, err := template.New("index.html").ParseFiles("templates/index.html")

	if err != nil {
		t, _ = template.New("index.html").ParseFiles("../templates/index.html")
	}

	params := indexTemplateParams{ Title: "Check DNS Propagation Worldwide", ShowRecaptcha: true, PublicKey: i.Configuration.Recaptcha.PublicKey}
	t.Execute(w, params)
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:    4096,
	WriteBufferSize:   4096,
	EnableCompression: true,
	CheckOrigin:       CheckOrigin,
}

// QueryRequestHandler handles the requests made through the WebSocket.
type QueryRequestHandler struct {
	// Configuration contains the app configuration. In this context only the server list is used.
	Configuration Configuration
}

// ServeHTTP handles the request made by the user through the WebSocket. It will upgrade the connection from HTTP to
// WebSocket, read the request variables, validate them and perform the queries to the list of DNS servers in the
// configuration file.
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

	query := DNSQuery{Servers: q.Configuration.Servers}

	c := query.QueryAllAsync(websocketreq.Domain, websocketreq.RecordType)
	for _ = range q.Configuration.Servers {
		conn.WriteJSON(<-c)
	}
}

// Init is the entrypoint of the application. It loads the configuration file and sets-up the routes
func Init(mux *http.ServeMux, configuration Configuration) {
	indexHandler := IndexRequestHandler{Configuration: configuration}
	queryHandler := QueryRequestHandler{Configuration: configuration}
	captchaHandler := RecaptchaMiddleware{Configuration: configuration}

	mux.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets"))))
	mux.Handle("/", indexHandler)
	mux.Handle("/api/v1/query", captchaHandler.Middleware(queryHandler))
}
