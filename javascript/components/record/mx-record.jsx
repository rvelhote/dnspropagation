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

const MxRecord = props =>
  <div className="dns-record">
    <div className="dns-record__mx-record">{props.record.Mx}</div>
    <div className="dns-record__preference">{props.record.Preference}</div>
  </div>;

MxRecord.displayName = 'MxRecord';

// TODO Create a custom proptype to validate numeric input and make sure it's at least a number
MxRecord.propTypes = {
  record: React.PropTypes.shape({
    Mx: React.PropTypes.string,
    Preference: React.PropTypes.string
  })
};

MxRecord.defaultProps = {
  record: {
    Mx: '',
    Preference: '0'
  }
};

export default MxRecord;
