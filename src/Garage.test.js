import React from 'react';
import { shallow, mount} from 'enzyme';
import Garage from './components/Rooms/Garage';
import 'regenerator-runtime/runtime'

describe('Test case for testing garage',() =>{

    // checking if all cards are here
    test("Garage Card test", () =>{
        let wrapper = mount(<Garage />);
        expect(wrapper.find("#garageCard")).toBeTruthy();

    });
    it("Temperature Card test", () =>{
        let wrapper = mount(<Garage />);
        expect(wrapper.find("#temperatureCard")).toBeTruthy();

    });

    it("Light Card test", () =>{
        let wrapper = mount(<Garage />);
        expect(wrapper.find("#lightCard")).toBeTruthy();

    });
    ////

    // it("Garage Card switch test", () =>{
    //     const onButtonClickMock = jest.fn();
    //     let wrapper = mount(<Garage
    //         garageSwitch={false} />);
    //     const buttonElement = wrapper.prop(".garageCardSwitch");

    //     buttonElement.simulate('click');
    //     expect(onButtonClickMock).toHaveBeenCalled(1);
    //     expect(onButtonClickMock).toHaveBeenWith(true);

    // })
    



})