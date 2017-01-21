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
import React from 'react';
import DnsServerCollection from './dns-server-collection';

class DnsPropagation extends React.Component {
  constructor(props) {
    super(props);

    this.onDnsQuerySubmit = this.onDnsQuerySubmit.bind(this);
    this.handleDomainChange = this.handleDomainChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);

    this.state = {
      domain: 'github.com',
      type: 'a',
      servers: []
    };
  }

  onDnsQuerySubmit(event) {
    event.preventDefault();

    const params = {
      method: event.target.method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `domain=${this.state.domain}&type=${this.state.type}`
    };

    fetch(event.target.action, params)
      .then(response => response.json())
      .then(response => this.setState({servers: response}));
  }

  handleDomainChange(event) {
    this.setState({domain: event.target.value});
  }

  handleTypeChange(event) {
    this.setState({type: event.target.value});
  }

  render() {
    return (
      <div>
        <header className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <h1><img alt="DNS Propagation Logo" src="//i.imgur.com/rN1zILE.png"/>&nbsp;dnspropagation</h1>
                  <small>&nbsp;Check a domain's DNS records. Check the propagation of your record changes and debug DNS related issues on the Internet.</small>
                </div>

                <form onSubmit={this.onDnsQuerySubmit} method="post" action="/api/v1/query">
                  <div className="row">
                    <div className="col-lg-4">
                      <input placeholder="What is the domain you want to check?" className="form-control" type="text" value={this.state.domain} onChange={this.handleDomainChange} required />
                    </div>
                    <div className="col-lg-2">
                      <select className="form-control" value={this.state.record} onChange={this.handleTypeChange} required>
                        <option value="a">A</option>
                        <option value="aaaa">AAAA</option>
                        <option value="cname">CNAME</option>
                        <option value="mx">MX</option>
                        <option value="ns">NS</option>
                        <option value="ptr">PTR</option>
                        <option value="soa">SOA</option>
                        <option value="srv">SRV</option>
                        <option value="txt">TXT</option>
                      </select>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-primary" type="submit">Query</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="results">
                <DnsServerCollection servers={this.state.servers.DnsServerData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DnsPropagation.displayName = 'DnsPropagation';

export default DnsPropagation;
