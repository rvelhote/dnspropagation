// Package main is the entry point for the DNS Propagation checker application.
package main

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
	"database/sql"
	_ "github.com/mattn/go-sqlite3"
	"github.com/rvelhote/dnspropagation/application"
	"github.com/rvelhote/go-public-dns"
	"log"
	"net/http"
)

// This is the main entry point of the webapp. All the actual application code is under the application directory.
// TODO Setup a caching configuration for the nameservers list and database contents
// TODO Load from the public-dns.info URL to allow up-to-date information (right now it's using a copy)
func main() {
	configuration, _ := application.LoadConfiguration("conf/configuration.json")

	db, _ := sql.Open("sqlite3", "conf/nameservers.db")

	dnsinfo := publicdns.PublicDNS{DB: db}
	configuration.Servers, _ = dnsinfo.GetBestFromCountries(configuration.Countries)

	db.Close()

	mux := http.NewServeMux()
	application.Init(mux, configuration)

	log.Println("Ready to serve requests!")
	http.ListenAndServe(":8080", mux)
}
