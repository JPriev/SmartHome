import React, { Component, useState } from "react"
// import { Container, Row, Col, Card, CardGroup, InputGroup, FormControl, Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

import '../css/Room.css'
import TimeSince from '../TimeSince'
import TemperatureCard from "./objects/TemperatureCard"
import CurtainsCard from "./objects/CurtainsCard"
import LightCard from "./objects/LightCard"
import PlantWateringCard from "./objects/PlantWateringCard"
import PetFoodCard from "./objects/PetFoodCard"
import CoffeeMachineCard from "./objects/CoffeeMachineCard"

class Kitchen extends Component {
    constructor(props){
        super(props)
        this.state = {
            temperature: 0,
            temperatureValue: 0,
            temperatureMin: 0,
            temperatureMax: 40,
            temperatureStep: 0.5,
            timeSince_temperatureValue: "",
            timeSince_temperatureValueDate: 0,

            curtains: 0,
            curtainsValue: 0,
            curtainsMin: 0,
            curtainsMax: 100,
            curtainsStep: 1,
            timeSince_curtainsValue: "",
            timeSince_curtainsValueDate: 0,

            light: 0,
            lightValue: 0,
            lightMin: 0,
            lightMax: 100,
            lightStep: 1,
            timeSince_lightValue: "",
            timeSince_lightValueDate: 0,

            plants: 0,
            plantsValue: 0,
            plantsMin: 0,
            plantsMax: 100,
            plantsStep: 1,
            timeSince_plantsValue: "",
            timeSince_plantsValueDate: 0,
            plantsSwitch: false,
            plantsSwitchTemp: false,

            petFood: 0,
            petFoodValue: 0,
            petFoodMin: 0,
            petFoodMax: 48,
            petPortion: 0,
            petPortionValue: 0,
            petPortionMin: 0,
            petPortionMax: 2000,
            timeSince_petFoodValue: "",
            timeSince_petFoodValueDate: 0,

            timeSince_coffeeValue: "",
            timeSince_coffeeValueDate: 0,
            coffeeSwitch: false,
            coffeeSwitchTemp: false
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleOnClick = (event) => {
        const min = `${event.target.name}Min`;
        const max = `${event.target.name}Max`;
        const switchValue = `${event.target.name}Switch`;
        const temp = `${event.target.name}SwitchTemp`;
        if (this.state[temp] !== this.state[switchValue]) {
            this.handleSwitch(event)
        }
        if (typeof this.state[min] !== "undefined") {
            if (this.validation(this.state[min], this.state[max], this.state[event.target.name])) {
                this.handleValueChange(event)
            } else {
                alert(`INVALID VALUE!\n\nPlease insert value between ${this.state[min]} and ${this.state[max]}`);
            }
        }
        this.handleTimeAgo(event)
    }

    handleTimeAgo = (event) => {
        const ts = `timeSince_${event.target.name}Value`
        const tsd = `timeSince_${event.target.name}ValueDate`
        this.setState({
            [ts]: TimeSince(this.state[tsd]),
            [tsd]: new Date()
        });
    }

    handleValueChange = (event) => {
        const value = `${event.target.name}Value`;
        this.setState({
            [value]: this.state[event.target.name]
        });
    }

    validation = (min, max, val) => {
        if (val >= min && val <= max) {
            return true;
        } else {
            return false;
        }
    }

    handleSwitch = (event) => {
        const name = `${event.target.name}Switch`;
        this.setState({
            [name]: !this.state[name]
        });
    }

    wasSwitchChanged = (event) => {
        const name = `${event.target.name}SwitchTemp`;
        this.setState({
            [name]: !this.state[name]
        });
    }

    render() {
        return (
            <Container className="container">
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <TemperatureCard  
                            temperatureValue={this.state.temperatureValue}
                            temperature={this.state.temperature}
                            handleInputChange={this.handleInputChange}
                            temperatureMin={this.state.temperatureMin}
                            temperatureMax={this.state.temperatureMax}
                            temperatureStep={this.state.temperatureStep}
                            handleOnClick={this.handleOnClick}
                            timeSince_temperatureValue={this.state.timeSince_temperatureValue}
                        />
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <CurtainsCard  
                            curtainsValue={this.state.curtainsValue}
                            curtains={this.state.curtains}
                            handleInputChange={this.handleInputChange}
                            curtainstMin={this.state.curtainsMin}
                            curtainsMax={this.state.curtainsMax}
                            curtainsStep={this.state.curtainsStep}
                            handleOnClick={this.handleOnClick}
                            timeSince_curtainsValue={this.state.timeSince_curtainsValue}
                        />
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <LightCard  
                            lightValue={this.state.lightValue}
                            light={this.state.light}
                            handleInputChange={this.handleInputChange}
                            lightMin={this.state.lightMin}
                            lightMax={this.state.lightMax}
                            lightStep={this.state.lightStep}
                            handleOnClick={this.handleOnClick}
                            timeSince_lightValue={this.state.timeSince_lightValue}
                        />
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <PlantWateringCard  
                            plantsValue={this.state.plantsValue}
                            plants={this.state.plants}
                            handleInputChange={this.handleInputChange}
                            plantsMin={this.state.plantsMin}
                            plantsMax={this.state.plantsMax}
                            plantsStep={this.state.plantsStep}
                            handleOnClick={this.handleOnClick}
                            timeSince_plantsValue={this.state.timeSince_plantsValue}
                            plantsSwitch={this.state.plantsSwitch}
                            plantsSwitchTemp={this.state.plantsSwitchTemp}
                            wasSwitchChanged={this.wasSwitchChanged}
                        />
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <PetFoodCard
                            petFood={this.state.petFood}
                            petFoodMin={this.state.petFoodMin}
                            petFoodMax={this.state.petFoodMax}
                            petPortion={this.state.petPortion}
                            petPortionMin={this.state.petPortionMin}
                            petPortionMax={this.state.petPortionMax}
                            timeSince_petFoodValue={this.state.timeSince_petFoodValue}
                            handleInputChange={this.handleInputChange}
                            handleOnClick={this.handleOnClick}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <CoffeeMachineCard
                            wasSwitchChanged={this.wasSwitchChanged}
                            coffeeSwitchTemp={this.state.coffeeSwitchTemp}
                            timeSince_coffeeValue={this.state.timeSince_coffeeValue}
                            handleInputChange={this.handleInputChange}
                            handleOnClick={this.handleOnClick}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Kitchen;