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

const DnsServer = props => (
  <div className="server">
    <div className="server__flag">
      <span className={`flag-icon flag-icon-${props.server.Country.toLowerCase()}`}>&nbsp;</span>
    </div>
    <div className="server__country">
      <span>{ props.server.City.length > 0 ? `${props.server.City}, ` : '' }</span>
      <span>{ props.server.Country }</span>
      &nbsp;<small>({ props.duration })</small>
    </div>
  </div>
);

DnsServer.displayName = 'DnsServer';

DnsServer.propTypes = {
  server: React.PropTypes.object
};

DnsServer.defaultProps = {
  server: {}
};

export default DnsServer;
