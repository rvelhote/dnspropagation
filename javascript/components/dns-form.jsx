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

import DnsSelectRecord from './form/dns-select-record';
import DnsInputDomain from './form/dns-input-domain';
import DnsFormSubmit from './form/dns-form-submit';

const DnsForm = props =>
  <form onSubmit={props.submit} method="post" action="/api/v1/query">
    <div className="row">
      <div className="col-lg-4">
        <DnsInputDomain value={props.domain} onChange={props.changeDomain} />
      </div>
      <div className="col-lg-2">
        <DnsSelectRecord value={props.type} onChange={props.changeType} />
      </div>
      <div className="col-lg-2">
        <DnsFormSubmit working={props.working} domain={props.domain} type={props.type} />
      </div>
    </div>
  </form>;

DnsForm.displayName = 'DnsForm';

DnsForm.propTypes = {
  submit: PropTypes.func,
  changeDomain: PropTypes.func,
  changeType: PropTypes.func,
  working: PropTypes.bool,
  type: PropTypes.string,
  domain: PropTypes.string
};

DnsForm.defaultProps = {
  submit: () => {},
  changeDomain: () => {},
  changeType: () => {},
  working: false,
  type: '',
  domain: 'golang.org'
};

export default DnsForm;
