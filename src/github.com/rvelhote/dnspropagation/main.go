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
    "net/http"
    "html/template"
    "github.com/miekg/dns"
    "log"
    "io/ioutil"
    "encoding/json"
    "github.com/gorilla/websocket"
    "strings"
    "time"
)

// This struct will hold each of the servers in the configuration file
type Server struct {
    Server string `json:"server"`
    Provider string `json:"provider"`
    Country string `json:"country"`
    City string `json:"city"`
    Code string `json:"code"`
}

type ResponsePayload struct {
    Domain string
    RecordType string
    DnsServerData []DnsServerData
}

type DnsServerData struct {
    RecordType string
    Server Server
    Duration string
    Message string
    DnsRecords []dns.RR
}

type WebsocketRequest struct {
    Domain string `json:"domain"`
    RecordType string `json:"type"`
}

// Load all the servers configured in the configuration file
var configuration = LoadServerConfiguration("conf/servers.json")

// Load the configured servers from a specific path. It should return an array of servers to be used in queries.
// TODO Missing error handling and path checking
func LoadServerConfiguration(path string) []Server {
    servers := make([]Server, 0)

    file, _ := ioutil.ReadFile(path)
    json.Unmarshal(file, &servers)

    return servers
}

// Displays the index page with the form that will allow users to make queries
func index(w http.ResponseWriter, req *http.Request) {
    w.Header().Add("Content-Type", "text/html")
    t, _ := template.New("index.html").ParseFiles("templates/index.html")
    t.Execute(w, map[string] string {"Title": "Check DNS Propagation Worldwide", "Body": "Hi this is my body"})
}

var upgrader = websocket.Upgrader{}

// Query a DNS record for a specific domain
// Right now the connection is closed after each request. The goal in the future is to maintain connections open.
func query(w http.ResponseWriter, req *http.Request) {
    conn, _ := upgrader.Upgrade(w, req, nil)

    websocketreq := WebsocketRequest{}
    conn.ReadJSON(&websocketreq)

    domain := websocketreq.Domain
    recordType := req.Form.Get("type");
    record := getRecordType(strings.ToUpper(websocketreq.RecordType))

    if len(domain) == 0 {
        log.Print("Empty domain")
    }

    if record == 0 {
        log.Print("Invalid record specified")
    }

    sem := make(chan DnsServerData, len(configuration))

    for _, server := range configuration {
        go func (server Server, conn *websocket.Conn) {
            serverData := queryServer(domain, record, server.Server)
            serverData.Server = server
            serverData.RecordType = recordType
            sem <- serverData
        } (server, conn);
    }

    for i := 0; i < len(configuration); i++ {
        conn.WriteJSON(<-sem)
    }

    conn.Close()
}

func getRecordType(record string) uint16 {
    recordTypes := map[string]uint16{
        "A": dns.TypeA,
        "AAAA": dns.TypeAAAA,
        "MX": dns.TypeMX,
        "CNAME": dns.TypeCNAME,
        "SRV": dns.TypeSRV,
        "SOA": dns.TypeSOA,
        "TXT": dns.TypeTXT,
        "PTR": dns.TypePTR,
        "NS": dns.TypeNS,
    }
    return recordTypes[record]
}

// Query a specific DNS server for information about a record that belongs to a domain name.
// If there is a problem with the request the error message will be returned in the ServerReply struct as well as a
// boolean flag that indicated the request's final outcome.
func queryServer(domain string, record uint16, server string) DnsServerData {
    serverData := DnsServerData{ DnsRecords: nil, Message: "", Duration: "" }
    client := dns.Client{}
    client.Timeout = time.Second * 10

    message := dns.Msg{}
    message.SetQuestion(domain + ".", record)

    response, duration, err := client.Exchange(&message, server + ":53")

    if err != nil {
        serverData.Message = err.Error()
        return serverData
    }

    serverData.Duration = duration.String()
    serverData.DnsRecords = response.Answer

    return serverData
}

func main() {
    fs := http.FileServer(http.Dir("assets"))
    http.Handle("/assets/", http.StripPrefix("/assets/", fs))

    http.HandleFunc("/", index)
    http.HandleFunc("/api/v1/query", query)
    //http.HandleFunc("/api/v1/websocket", responseWebsocket);

    http.ListenAndServe(":8080", nil)
}
