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

const DnsSelectRecord = props =>
  <select className="form-control" value={props.value} onChange={props.onChange} required>
    <option value="a">A</option>
    <option value="aaaa">AAAA</option>
    <option value="caa">CAA</option>
    <option value="cname">CNAME</option>
    <option value="mx">MX</option>
    <option value="ns">NS</option>
    <option value="ptr">PTR</option>
    <option value="soa">SOA</option>
    <option value="srv">SRV</option>
    <option value="txt">TXT</option>
  </select>;

DnsSelectRecord.displayName = 'DnsSelectRecord';

DnsSelectRecord.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
};

DnsSelectRecord.defaultProps = {
  value: 'A',
  onChange: () => {}
};

export default DnsSelectRecord;
