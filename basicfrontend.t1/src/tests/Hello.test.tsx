// src/tests/Hello.test.tsx

import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from '../components/Hello';

it('renders the correct text when no enthusiasm level is given (default 1)', () => {
    const hello = enzyme.shallow(<Hello name='responsive kaysta' />);
    expect(hello.find(".greeting").text()).toEqual('Hello responsive kaysta!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name='responsive kaysta' enthusiasmLevel={1} />);
    expect(hello.find(".greeting").text()).toEqual('Hello responsive kaysta!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = enzyme.shallow(<Hello name='responsive kaysta' enthusiasmLevel={5} />);
    expect(hello.find(".greeting").text()).toEqual('Hello responsive kaysta!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
    expect(() => {
        enzyme.shallow(<Hello name='responsive kaysta' enthusiasmLevel={0} />);
    }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
    expect(() => {
        enzyme.shallow(<Hello name='responsive kaysta' enthusiasmLevel={-1} />);
    }).toThrow();
});