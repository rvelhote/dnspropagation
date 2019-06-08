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

const SrvRecord = props =>
  <div className="dns-record">
    <div className="dns-record__src-record">
      <div className="dns-record__src-record__target">
        <span className="label label-default">Priority</span> {props.record.Priority}
      </div>
      <div className="dns-record__src-record__target">
        <span className="label label-default">Port:</span> {props.record.Port}
      </div>
      <div className="dns-record__src-record__target">{props.record.Target}</div>
    </div>
  </div>;

SrvRecord.propTypes = {
  record: PropTypes.shape({
    Target: PropTypes.string,
    Priority: PropTypes.number,
    Port: PropTypes.number
  })
};

SrvRecord.defaultProps = {
  record: {
    Target: '',
    Priority: 0,
    Port: 0
  }
};

export default SrvRecord;
