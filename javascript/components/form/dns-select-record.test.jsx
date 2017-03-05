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
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DnsSelectRecord from './dns-select-record';

const params = { value: 'a', onChange: jest.fn() };

test('record type select element should render correctly', () => {
  const tree = renderer.create(
    <DnsSelectRecord value={params.value} onChange={params.onChange} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('record type onChange should trigger the onChange function', () => {
  const component = shallow(<DnsSelectRecord value={params.value} onChange={params.onChange} />);

  component.find('select').simulate('change');
  expect(params.onChange).toBeCalled();
});
