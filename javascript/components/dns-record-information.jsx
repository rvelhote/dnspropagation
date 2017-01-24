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
import ARecord from './information/a-record';
import AAAARecord from './information/aaaa-record';
import CnameRecord from './information/cname-record';
import MxRecord from './information/mx-record';
import NsRecord from './information/ns-record';
import PtrRecord from './information/ptr-record';
import SoaRecord from './information/soa-record';
import SrvRecord from './information/srv-record';
import TxtRecord from './information/txt-record';

const RecordTypes = {
  a: ARecord,
  aaaa: AAAARecord,
  cname: CnameRecord,
  mx: MxRecord,
  ns: NsRecord,
  ptr: PtrRecord,
  soa: SoaRecord,
  srv: SrvRecord,
  txt: TxtRecord,
};

const DnsRecordInformation = (props) => {
  const RecordType = RecordTypes[props.record];
  return (
    <div className="block__dns-record-information">
      <RecordType record={props.record} />
    </div>
  );
};

DnsRecordInformation.displayName = 'DnsRecordInformation';

DnsRecordInformation.propTypes = {
  record: React.PropTypes.string
};

DnsRecordInformation.defaultProps = {
  record: 'A'
};

export default DnsRecordInformation;
