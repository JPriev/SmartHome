import React from 'react';
import { shallow, mount} from 'enzyme';
import Garage from './components/Garage';

describe('Test case for testing garage',() =>{

    // checking if all cards are here
    test("Garage Card test", () =>{
        let wrapper = shallow(<Garage />);
        expect(wrapper.find("#garageCard")).toBeTruthy();

    });
    it("Temperature Card test", () =>{
        let wrapper = shallow(<Garage />);
        expect(wrapper.find("#temperatureCard")).toBeTruthy();

    });

    it("Light Card test", () =>{
        let wrapper = shallow(<Garage />);
        expect(wrapper.find("#lightCard")).toBeTruthy();

    });
    // ////

    // it("Garage Card switch test", () =>{
    //     let wrapper = mount(<Garage/>);
    //     expect(!wrapper.state().garageSwitch.toBeTruthy());

    // })
    



})