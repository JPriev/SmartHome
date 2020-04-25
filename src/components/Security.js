import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'

import '../css/Room.css'
import TimeSince from '../TimeSince'
import SecuritySystemCard from "./objects/SecuritySystemCard"

class Security extends Component {
    constructor(props){
        super(props)
        this.state = {
            timeSince_securityValue: "",
            timeSince_securityValueDate: 0,
            securitySwitch: false,
            securitySwitchTemp: false
        }
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
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <SecuritySystemCard
                            wasSwitchChanged={this.wasSwitchChanged}
                            securitySwitchTemp={this.state.securitySwitchTemp}
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