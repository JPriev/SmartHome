import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'

import '../css/Room.css'
import TimeSince from '../TimeSince'
import TemperatureCard from "./objects/TemperatureCard"
import CurtainsCard from "./objects/CurtainsCard"
import LightCard from "./objects/LightCard"

class Bathroom extends Component {
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

    render() {
        return (
            <Container>
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
                </Row>
            </Container>
        )
    }
}

export default Bathroom;