import React from 'react';
import { shallow } from 'enzyme';
import TemperatureCard from './components/objects/TemperatureCard';

describe('Test case for testing temperature card',() =>{
    let wrapper;
    test('Temperature card check',()=>
    {
    wrapper = shallow(<TemperatureCard/>);
    wrapper.find('#temperature').simulate('change', {target: {name: 'temperature', id: 'temperature', value: 55}});
    wrapper.find("#button").simulate('click');
    expect(wrapper.find('cardAddon').value ==='55°C');
    })
});