import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';

import '../../css/Room.scss'
import TimeSince from '../../TimeSince'
import SecuritySystemCard from "../objects/SecuritySystemCard"

class Security extends Component {
    constructor(props){
        super(props)
        this.state = {
            securityId : "5ea88f6d205fcc4704bd455c",
            timeSince_securityValue: "",
            timeSince_securityValueDate: 0,
            securitySwitch: false
        }
    }

    componentDidMount = async () => {
        const res1 = await fetch('http://localhost:5000/security', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"              
            }   
                 
        })
        const par1 = await res1.json();
        this.setState({
            securitySwitch: par1.securitySwitch
        })
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
                        <SecuritySystemCard
                            wasSwitchChanged={this.wasSwitchChanged}
                            securitySwitch={this.state.securitySwitch}
                            timeSince_securityValue={this.state.timeSince_securityValue}
                            handleInputChange={this.handleInputChange}
                            handleOnClick={this.handleOnClick}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Security;