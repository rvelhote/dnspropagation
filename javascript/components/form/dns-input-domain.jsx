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
import { defineMessages, intlShape, injectIntl } from 'react-intl';

const messages = defineMessages({
  placeholder: {
    id: 'domain.placeholder.input',
    defaultMessage: 'What is the domain you want to check?',
  }
});

const DnsInputDomain = props => <input id="domain" placeholder={props.intl.formatMessage(messages.placeholder)} className="form-control" type="text" value={props.value} onChange={props.onChange} required />;

DnsInputDomain.displayName = 'DnsInputDomain';

DnsInputDomain.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  intl: intlShape.isRequired,
};

DnsInputDomain.defaultProps = {
  value: '',
  onChange: () => {}
};

export default injectIntl(DnsInputDomain);
