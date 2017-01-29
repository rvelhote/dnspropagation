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
import DnsRecordInformation from './dns-record-information';
import DnsWebSocket from '../websocket/websocket';

class DnsPropagation extends React.Component {
  constructor(props) {
    super(props);

    this.onDnsQuerySubmit = this.onDnsQuerySubmit.bind(this);
    this.handleDomainChange = this.handleDomainChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);

    this.state = {
      domain: 'golang.org',
      type: 'a',
      servers: [],
      working: false,
      percentage: 0
    };

    this.websocket = new DnsWebSocket('ws://127.0.0.1:8080/api/v1/query');
    this.websocket.onWebSocketReply = this.onWebsocketReply.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', (event) => {
      const input = document.getElementById('domain');
      const focused = document.activeElement;

      if (focused.type !== 'text' && focused.type !== 'select') {
        if (event.key.toLowerCase() === 'q') {
          this.onDnsQuerySubmit(event);
        } else if (event.key.toLowerCase() === 'a') {
          input.focus();
          input.selectionStart = input.selectionEnd = input.value.length;
        }
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup');
  }

  onDnsQuerySubmit(event) {
    event.preventDefault();
    this.setState({ working: true, percentage: 0, servers: [] });
    this.websocket.fetch(this.state.domain, this.state.type);
  }

  onWebsocketReply(event) {
    const dataset = [JSON.parse(event.data)];
    const percentage = ((this.state.servers.length + 1) / 15) * 100;

    const state = {
      servers: this.state.servers.concat(dataset),
      percentage,
      working: percentage !== 100
    };

    this.setState(state);
  }

  handleDomainChange(event) {
    this.setState({ domain: event.target.value });
  }

  handleTypeChange(event) {
    this.setState({ type: event.target.value });
  }

  render() {
    return (
      <div>
        <header className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <h1><img alt="DNS Propagation Logo" src="//i.imgur.com/rN1zILE.png" />&nbsp;
                    dnspropagation</h1>
                  <small>&nbsp;Check a domain's DNS records. Check the propagation of your record
                    changes and debug DNS related issues on the Internet.
                  </small>
                </div>

                <form onSubmit={this.onDnsQuerySubmit} method="post" action="/api/v1/query">
                  <div className="row">
                    <div className="col-lg-4">
                      <input id="domain" placeholder="What is the domain you want to check?" className="form-control" type="text" value={this.state.domain} onChange={this.handleDomainChange} required />
                    </div>
                    <div className="col-lg-2">
                      <select className="form-control" value={this.state.type} onChange={this.handleTypeChange} required>
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
                      <button className="btn btn-primary" type="submit" disabled={this.state.working}>
                        <span className="glyphicon glyphicon-search">&nbsp;</span>
                        <span>Query {this.state.type} Record on {this.state.domain}</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <progress max="100" value={this.state.percentage} />
        </header>

        <div className="container results">
          <div className="row">
            <div className="col-lg-12">
              <DnsRecordInformation record={this.state.type} />
            </div>
            <div className="col-lg-12">
              { this.state.servers.length > 0 ? this.state.servers[0].DnsRecords[0].Hdr.Ttl : '' }
            </div>
            <div className="col-lg-12">
              <DnsServerCollection type={this.state.type} domain={this.state.domain} servers={this.state.servers} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DnsPropagation.displayName = 'DnsPropagation';

export default DnsPropagation;
