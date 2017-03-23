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
	"os"
	"time"
)

// LoadNameservers will check if current nameservers CSV file modification date is still within the configured cache
// period. If it's not, a new fresh version will be loaded from public-dns.info and its contents dumped into the DB.
// TODO Make the source URL configurable
func LoadNameservers(db *sql.DB, conf application.Configuration) error {
	fileinfo, err := os.Stat("conf/nameservers.csv")

	if err != nil && !os.IsNotExist(err) {
		return err
	}

	var nameservers []*publicdns.Nameserver

	// FIXME JSON loading does not parse the duration correctly. Find out why!
	cacheUntil, _ := time.ParseDuration(conf.CacheUntil)

	if err == nil && fileinfo != nil && fileinfo.ModTime().Add(cacheUntil).After(time.Now()) {
		log.Println("Loading the nameservers from current cached copy")
		nameservers, err = publicdns.LoadFromFile("conf/nameservers.csv")
	} else {
		log.Println("Loading the nameservers from the remote source")
		nameservers, err = publicdns.LoadFromURL(conf.RemoteSource, "conf/nameservers.csv")
	}

	if err != nil {
		return err
	}

	_, err = publicdns.DumpToDatabase(db, nameservers)
	if err != nil {
		return err
	}

	return nil
}

// This is the main entry point of the webapp. All the actual application code is under the application directory.
func main() {
	configuration, _ := application.LoadConfiguration("conf/configuration.json")

	//
	db, _ := sql.Open("sqlite3", "conf/nameservers.db")
	err := LoadNameservers(db, configuration)

	// TODO Try to load from a cached copy anyway in case of error (what if the table doesn't exist?)
	if err != nil {
		log.Println("Could not load the nameservers from any source. Aborting startup!")
		log.Fatal(err)
	}

	dnsinfo := publicdns.PublicDNS{DB: db}
	configuration.Servers, _ = dnsinfo.GetBestFromCountries(configuration.Countries)

	db.Close()

	mux := http.NewServeMux()
	application.Init(mux, configuration)

	log.Println("Ready to serve requests!")
	http.ListenAndServe(":8080", mux)
}
