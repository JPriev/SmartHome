import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'

import axios from 'axios';

import '../../css/Room.scss'
import TimeSince from '../../TimeSince'
import GarageGateCard from '../objects/GarageGateCard'
import TemperatureCard from "../objects/TemperatureCard"
import LightCard from "../objects/LightCard"

class Garage extends Component {
    constructor(props){
        super(props)
        this.state = {
            temperatureId: "5ea880105e775d3b74034197",
            temperature: 0,
            temperatureMin: 0,
            temperatureMax: 40,
            temperatureStep: 0.5,
            timeSince_temperatureValue: "",
            timeSince_temperatureValueDate: 0,

            lightId : "5ea884b35a93c52798b67096",
            light: 0,
            lightMin: 0,
            lightMax: 100,
            lightStep: 1,
            timeSince_lightValue: "",
            timeSince_lightValueDate: 0,

            garageId: "5ea884d840d9c34704100baa",
            timeSince_garageValue: "",
            timeSince_garageValueDate: 0,
            garageSwitch: false
        }
    }

    componentDidMount = async () => {
        const res1 = await fetch('http://localhost:5000/garageLight', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"              
            }   
                 
        })
        const par1 = await res1.json();
        this.setState({
            light: par1.light
        })
        console.log(this.state);


        const res2 = await fetch('http://localhost:5000/garageTemperature', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"              
            }   
                 
        })
        const par2 = await res2.json();
        this.setState({
            temperature: par2.temperature
        })
        console.log(this.state);
        

        const res3 = await fetch('http://localhost:5000/garage', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"              
            }   
                 
        })
        const par3 = await res3.json();
        this.setState({
            garageSwitch: par3.garageSwitch
        })
        console.log(this.state);
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = parseFloat(event.target.value)
        const min = parseFloat(event.target.min)
        const max = parseFloat(event.target.max)
        if (typeof min !== "undefined") {
            if (this.validation(min, max, value)) {
                this.setState({
                    [name]: value
                });
            } else {
                alert(`INVALID VALUE!\n\nPlease insert value between ${min} and ${max}`);
            }
        }
    }

    handleOnClick = (event) => {
        event.preventDefault();
        
        let data = {};
        
		let name = event.target.name;
        let switchName = `${name}Switch`;
        const targetId = `${name}Id`
        console.log("PRIES NAME //////")
        console.log(name)
        if (this.state[name] !== undefined && this.state[name] !== null) {
            if (name === "petFood") {
                data[name] = this.state[name]
                data["petPortion"] = this.state.petPortion
            } else {
                data[name] = this.state[name]
            }
        }
        if (this.state[switchName] !== undefined && this.state[switchName] !== null) {
            data[switchName] = this.state[switchName]
        }

          axios.put(`http://localhost:5000/${name}/update/${this.state[targetId]}`, data)
            .then(res => console.log(res.data))
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

    validation = (min, max, val) => {
        if (val >= min && val <= max) {
            return true;
        }
        return false;
    }

    wasSwitchChanged = (event) => {
        const name = `${event.target.name}Switch`;
        this.setState({
            [name]: !this.state[name]
        });
        console.log(`${name}: ${this.state[name]}`)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <GarageGateCard
                            id="garageCard"
                            wasSwitchChanged={this.wasSwitchChanged}
                            garageSwitch={this.state.garageSwitch}
                            timeSince_garageValue={this.state.timeSince_garageValue}
                            handleInputChange={this.handleInputChange}
                            handleOnClick={this.handleOnClick}
                        />
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <TemperatureCard
                            id="temperatureCard"
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
                        <LightCard
                            id="lightCard"
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

export default Garage;