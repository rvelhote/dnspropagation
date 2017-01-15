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
import DnsRecordCollection from './dns-record-collection';

class DnsPropagation extends React.Component {
    constructor(props) {
        super(props);

        this.onDnsQuerySubmit = this.onDnsQuerySubmit.bind(this);
        this.handleDomainChange = this.handleDomainChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);

        this.state = {
            domain: 'github.com',
            type: 'a',
            records: []
        };
    }

    handleDomainChange(event) {
        console.log(event.target.value);
        this.setState({domain: event.target.value});
    }

    handleTypeChange(event) {
        console.log(event.target.value);
        this.setState({type: event.target.value});
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
            .then(response => this.setState({ records: response }));
    }

    render () {
        return(
            <div>
                <header>HEADER</header>
                <section>
                    <form onSubmit={this.onDnsQuerySubmit} id="dnsquery" method="post" action="/api/v1/query">
                        <input type="text" value={this.state.domain} onChange={this.handleDomainChange} name="domain" required />

                        <select value={this.state.record} onChange={this.handleTypeChange} name="type" required>
                            <option value="a">A</option>
                            <option value="aaaa">AAAA</option>
                            <option value="mx">MX</option>
                            <option value="cname">CNAME</option>
                            <option value="ns">NS</option>
                            <option value="ptr">PTR</option>
                            <option value="soa">SOA</option>
                            <option value="srv">SRV</option>
                            <option value="txt">TXT</option>
                        </select>

                        <button type="submit">query!</button>
                    </form>
                </section>

                <DnsRecordCollection records={this.state.records} />

                <footer>footer</footer>
            </div>
        );
    }
}

DnsPropagation.displayName = 'DnsPropagation';

DnsPropagation.propTypes = {
    domain: React.PropTypes.string,
    type: React.PropTypes.string,
    records: React.PropTypes.array,
    onDnsQuery: React.PropTypes.func
};

export default DnsPropagation;
