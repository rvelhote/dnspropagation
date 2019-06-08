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
import PropTypes from 'prop-types';

const types = [
  { key: 'a', value: 'A' },
  { key: 'aaaa', value: 'AAAA' },
  { key: 'caa', value: 'CAA' },
  { key: 'cname', value: 'CNAME' },
  { key: 'mx', value: 'MX' },
  { key: 'ns', value: 'NS' },
  { key: 'ptr', value: 'PTR' },
  { key: 'soa', value: 'SOA' },
  { key: 'srv', value: 'SRV' },
  { key: 'txt', value: 'TXT' },
];

const DnsSelectRecord = props =>
  <select className="form-control" value={props.value} onChange={props.onChange} required>
    { types.map(record => <option key={record.value} value={record.key}>{record.value}</option>) }
  </select>;

DnsSelectRecord.displayName = 'DnsSelectRecord';

DnsSelectRecord.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

DnsSelectRecord.defaultProps = {
  value: 'A',
  onChange: () => {}
};

export default DnsSelectRecord;
