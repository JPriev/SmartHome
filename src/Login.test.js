import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
describe('Test case for testing login',() =>{
let wrapper;
test('username check',()=>
{
wrapper = shallow(<Login/>);
wrapper.find('#username').simulate('change', {target: {name: 'username', value: 'krishankantsinghal'}});
expect(wrapper.state('username')).toEqual('krishankantsinghal');
})
it('password check',()=>{
wrapper = shallow(<Login/>);
wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'krishankant123'}});
expect(wrapper.state('password')).toEqual('krishankant123');
})

// for this test must be implemented login procedure 

it('login check with right data',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'labas'}});
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'krabas'}});
wrapper.find('#button').simulate('click');
expect(wrapper.state('isLogined')).toBe(true);
})
it('login check with wrong data',()=>{
wrapper = shallow(<Login/>);
wrapper.find('#username').simulate('change', {target: {name: 'username', value: 'labas'}});
wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'neteisingas'}});
wrapper.find('#button').simulate('click');
expect(wrapper.state('isLogined')).toBe(false);
})
})