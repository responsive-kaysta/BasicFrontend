// src/tests/StatefulHello.test.tsx

import * as enzyme from 'enzyme';
import * as React from 'react';

import Hello from '../components/StatefulHello';

it('renders the correct text when no enthusiasm level is given (default 1)', () => {
    const hello = enzyme.shallow(<Hello name='responsive kaysta' />);
    expect(hello.find(".greeting").text()).toEqual('StatefulHello responsive kaysta!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name='responsive kaysta' enthusiasmLevel={1} />);
    expect(hello.find(".greeting").text()).toEqual('StatefulHello responsive kaysta!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = enzyme.shallow(<Hello name='responsive kaysta' enthusiasmLevel={5} />);
    expect(hello.find(".greeting").text()).toEqual('StatefulHello responsive kaysta!!!!!');
});

it('throws when the enthusiasm level is negative', () => {
    expect(() => {
        enzyme.shallow(<Hello name='responsive kaysta' enthusiasmLevel={-1} />);
    }).toThrow();
});

// not necessary, level set in ctor || 1
/*
it('throws when the enthusiasm level is 0', () => {
    expect(() => {
        enzyme.shallow(<Hello name='responsive kaysta' enthusiasmLevel={0} />);
    }).toThrow();
});
*/
