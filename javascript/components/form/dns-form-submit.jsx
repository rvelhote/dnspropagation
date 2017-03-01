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
import { FormattedMessage } from 'react-intl';

const DnsFormSubmit = props =>
  <button className="btn btn-primary" type="submit" disabled={props.working}>
    <span className="glyphicon glyphicon-search">&nbsp;</span>
    <span><FormattedMessage id="app-name" defaultMessage={'Query {type} record for {domain}'} values={{ type: props.type, domain: props.domain }} /></span>
  </button>;

DnsFormSubmit.displayName = 'DnsFormSubmit';

DnsFormSubmit.propTypes = {
  working: React.PropTypes.bool,
  type: React.PropTypes.string,
  domain: React.PropTypes.string
};

DnsFormSubmit.defaultProps = {
  working: false,
  type: '',
  domain: ''
};

export default DnsFormSubmit;
