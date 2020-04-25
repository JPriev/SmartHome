import React, { Component } from "react"
import { Container, Row, Col, Form } from 'react-bootstrap'

import '../css/Room.css'
import SolarPanelCard from './objects/SolarPanelCard'
import EnergyConsumptionCard from './objects/EnergyConsumptionCard'

class Electricity extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputPercent: 80,
            inputkWh: 1200,
            outputPercent: 0,
            outputkWh: 0,
            usagekWh: 7
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <SolarPanelCard
                            inputPercent={this.state.inputPercent}
                            inputkWh={this.state.inputkWh}
                            outputPercent={this.state.outputPercent}
                            outputkWh={this.state.outputkWh}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <EnergyConsumptionCard
                            usagekWh={this.state.usagekWh}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Electricity;