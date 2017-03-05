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
import { mountWithIntl } from '../../helpers/intl-enzyme-test-helper';
import createComponentWithIntl from '../../helpers/createComponentWithIntl';
import DnsInputDomain from './dns-input-domain';

const params = { value: 'golang.org', type: 'a' };
const onChange = jest.fn();

test('domain input should render and match snapshot', () => {
  const tree = createComponentWithIntl(
    <DnsInputDomain value={params.value} onChange={onChange} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('domain input should render and the onChange called when changed value', () => {
  const component = mountWithIntl(
    <DnsInputDomain value={params.value} onChange={onChange} />
  );

  component.setProps({ value: 'golang.com' });
  expect(component.prop('value')).toBe('golang.com');

  component.find('input').simulate('change');
  expect(onChange).toBeCalled();
});
