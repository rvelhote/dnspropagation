[![](https://godoc.org/github.com/rvelhote/dnspropagation?status.svg)](https://godoc.org/github.com/rvelhote/dnspropagation) [![Build Status](https://travis-ci.org/rvelhote/dnspropagation.svg?branch=master)](https://travis-ci.org/rvelhote/dnspropagation) [![codecov](https://codecov.io/gh/rvelhote/dnspropagation/branch/master/graph/badge.svg)](https://codecov.io/gh/rvelhote/dnspropagation) [![Code Climate](https://codeclimate.com/github/rvelhote/dnspropagation/badges/gpa.svg)](https://codeclimate.com/github/rvelhote/dnspropagation) [![Issue Count](https://codeclimate.com/github/rvelhote/dnspropagation/badges/issue_count.svg)](https://codeclimate.com/github/rvelhote/dnspropagation)

# DNS Propagation Checker
The DNS Propagation Checker is a webapp that will allow you to check the DNS records for a given domain against a set of pre-determined DNS Servers randomly hand-picked from [public-dns.info](http://public-dns.info).

At the moment there is no automated mechanism to choose/replace/remove servers. Perhaps in the future we could regularly fetch from the CSV provided by public-dns.info with all the valid servers and use that list instead of hardcoding the servers.

For this project the fabulous [DNS package](https://github.com/miekg/dns) by Miek Gieben (and contributors) is being use for DNS queries. Although the core GO features the ability to perform DNS queries it appears to be only against the local server which means we cannot use a specific DNS server.

# Screenshot
![http://i.imgur.com/Pg1DqtFl.png](http://i.imgur.com/Pg1DqtF.png)

# Requirements
- Go 1.7 or superior
- NPM
- Webpack (for Babel and JSX)
- Gulp (to build the Bootstrap from SASS)

# Installing and Running
You can either clone the repository or use `go get` to fetch the whole deal.

```
go get github.com/rvelhote/dnspropagation
cd src/github.com/rvelhote/dnspropagation
npm install
gulp sass:development
webpack
go run application-main/main.go
```

There is also a docker image that you can build yourself.

```
docker build -t dnspropagation .
docker run -p 8080:8080 -ti dnspropagation
```

And a docker image hosted over at Docker Hub

```
docker pull rvelhote/dnspropagation
docker run -p 8080:8080 -ti rvelhote/dnspropagation
```

A server will be created on port `8080` and you are now able to access the application in `http://127.0.0.1:8080/`. For now I am only testing in Firefox so support for other browsers in not guaranteed.

# Implementation and Technologies
This project exists mainly as a learning experience for GO and ReactJS (and the common tools that belong to the ecosystem such as Webpack) and besides those tools/technologies I also decided to use WebSockets to send the request from the client to the server. Other projects/websites that I saw, that supported multiple queries, send one HTTP Request for each server that will be checked and update as the queries are finished. This is of course for concurrency reasons i.e. if we only sent one request it would only finish when ALL servers returned their answers to the queries.

By using a WebSocket it's possible to make a single request to the server and by using Goroutines (as well as buffered channels) we are able to concurrently perform the requests and return them to the client as they finish in a single request. I felt it was a much cooler solution.

At this moment, the WebSocket connection, is opened when the query is sent to the server and closed when all the servers return their results. It's something to improve in the future and not very hard.

# Supported Records
At this moment only the most common DNS records are supported. The DNS package supports many many more types and I will be happy to include them as time goes and as per requests if any should come my way.

The supported records are:
- A (IPv4 Address)
- AAAA (IPv6 Address)
- CAA (Certification Authority Authorization)
- CNAME (Canonical Name)
- MX (Mail eXchange)
- NS (Nameserver)
- PTR (Pointer / Reverse DNS Lookup)
- SOA (Start of Authority)
- SRV (Service Record)
- TXT (Text Record)

# Plans and Improvements
There is lots of work to to and I will continue working little by little to implement them:
- Need a SASS review and to move the styles to the JSX files
- XSRF tokens
- Let the user insert an email with the expected DNS records and receive an email when they are propagated
- Have history of DNS queries and their result (store them in a server database or on localStorage?)
- Keep WebSocket connections open for some time instead of opening to make the query and closing when the query is done
- Load the configuration from the server during page load (perhaps when WebSocket connections are kept open)
- Automated DNS server health check. Replace servers when connections fail
- Let the users choose which countries they want to search
