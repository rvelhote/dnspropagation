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

const MxRecord = props =>
  <div className="dns-record">
    <div className="row">
      <div className="col-lg-2 dns-record--mx__preference">
        <span className="label label-default dns-record--mx__preference">
          {props.record.Preference}
        </span>
      </div>
      <div className="col-lg-10 dns-record--mx__mx">
        <span className="dns-record--mx__mx">{props.record.Mx}</span>
      </div>
    </div>
  </div>;

MxRecord.displayName = 'MxRecord';

MxRecord.propTypes = {
  record: PropTypes.shape({
    Mx: PropTypes.string,
    Preference: PropTypes.number
  })
};

MxRecord.defaultProps = {
  record: {
    Mx: '',
    Preference: 0
  }
};

export default MxRecord;
