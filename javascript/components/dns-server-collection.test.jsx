/*
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import DnsServerCollection from './dns-server-collection';

const params = {
  servers: [{
    Server: {
      IPAddress: '195.198.209.21',
      Name: '',
      Country: 'SE',
      City: 'Karlstad',
      Version: '',
      Error: '',
      DNSSec: false,
      Reliability: '',
      CheckedAt: '0001-01-01T00:00:00Z',
      CreatedAt: '0001-01-01T00:00:00Z'
    },
    Duration: '137.1729ms',
    Message: '',
    Records: {
      Type: 'a',
      Data: [{
        Hdr: {
          Name: 'golang.org.',
          Rrtype: 1,
          Class: 1,
          Ttl: 298,
          Rdlength: 4
        },
        A: '216.58.211.145'
      }]
    }
  }]
};

test('should pass', () => {
  const tree = renderer.create(
    <DnsServerCollection servers={params.servers} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
