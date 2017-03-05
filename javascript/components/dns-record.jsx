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
import ARecord from './record/a-record';
import AAAARecord from './record/aaaa-record';
import CaaRecord from './record/caa-record';
import CnameRecord from './record/cname-record';
import MxRecord from './record/mx-record';
import NsRecord from './record/ns-record';
import PtrRecord from './record/ptr-record';
import SoaRecord from './record/soa-record';
import SrvRecord from './record/srv-record';
import TxtRecord from './record/txt-record';

const RecordTypes = {
  a: ARecord,
  aaaa: AAAARecord,
  caa: CaaRecord,
  cname: CnameRecord,
  mx: MxRecord,
  ns: NsRecord,
  ptr: PtrRecord,
  soa: SoaRecord,
  srv: SrvRecord,
  txt: TxtRecord,
};

const DnsRecord = (props) => {
  const RecordType = RecordTypes[props.type];
  return <RecordType record={props.record} />;
};

DnsRecord.displayName = 'DnsRecord';

DnsRecord.propTypes = {
//  recordType: React.PropTypes.string,
//  record: React.PropTypes.object
};

DnsRecord.defaultProps = {
//  recordType: '',
//  record: {}
};

export default DnsRecord;
