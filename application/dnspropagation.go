package application

import (
    "github.com/gorilla/websocket"
    "html/template"
    "log"
    "net/http"
)

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

func query(w http.ResponseWriter, req *http.Request, configuration []Server) {
    conn, _ := upgrader.Upgrade(w, req, nil)

    websocketreq := WebsocketRequest{}
    conn.ReadJSON(&websocketreq)

    defer conn.Close()

    err := websocketreq.Validate()

    if err != nil {
        conn.WriteJSON(ResponseError{Error: err.Error()})
        return
    }

    sem := make(chan Response, len(configuration))

    for _, server := range configuration {
        go func(server Server) {
            request := DnsQuery{Domain: websocketreq.Domain, Record: websocketreq.RecordType, Server: server}
            sem <- request.GetResponse()
        }(server)
    }

    for _, _ = range configuration {
        conn.WriteJSON(<-sem)
    }
}

func Init() {
    servers, _ := LoadConfiguration("conf/servers.json")
    log.Println("Server list loaded!")

    fs := http.FileServer(http.Dir("assets"))
    http.Handle("/assets/", http.StripPrefix("/assets/", fs))

    http.HandleFunc("/", index)

    http.HandleFunc("/api/v1/query", func(w http.ResponseWriter, req *http.Request) {
        query(w, req, servers)
    })

    log.Println("Ready to server requests!")
    http.ListenAndServe(":8080", nil)
}
