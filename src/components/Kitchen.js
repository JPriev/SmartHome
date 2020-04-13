import React, { Component, useState } from "react"
import { Container, Row, Col, Card, CardGroup, InputGroup, FormControl, Button, Form } from 'react-bootstrap'

import '../css/Room.css'
import TimeSince from '../TimeSince'

class Kitchen extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     username: props.history.location.state.username,
        //     password: props.history.location.state.password
        // }
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
            timeSince_curtainsValueDate: 0
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleOnClick = (event) => {
        const state = this.state;
        const value = `${event.target.name}Value`;
        const min = `${event.target.name}Min`;
        const max = `${event.target.name}Max`;
        if (this.validation(state[min], state[max], state[event.target.name])) {
            const ts = `timeSince_${event.target.name}Value`
            const tsd = `timeSince_${event.target.name}ValueDate`
            this.setState({
                [value]: state[event.target.name],
                [ts]: TimeSince(state[tsd]),
                [tsd]: new Date()
            });
            console.log(state[value]);
        } else {
            alert(`INVALID VALUE!\n\nPlease insert value between ${state[min]} and ${state[max]}`);
            console.log(`invalid: ${state[value]}`);
        }
    } // Handle error if input is higher than expected

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
                    <Card className="crd">
                        <Card.Header>
                            <Card.Title>Temperature</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group as={Row}>
                                <InputGroup className="mb-3">
                                    <Col sm={7} md={12} lg={12}>
                                        <input 
                                            type="range"
                                            className="custom-range"
                                            name="temperature"
                                            value={this.state.temperature}
                                            onChange = {this.handleInputChange}
                                            min={this.state.temperatureMin}
                                            max={this.state.temperatureMax}
                                            step={this.state.temperatureStep}
                                        />
                                    </Col>
                                    <Col sm={3} md={9} lg={9}>
                                        <FormControl
                                            aria-describedby="basic-addon2"
                                            name="temperature"
                                            value={this.state.temperature}
                                            onChange={this.handleInputChange}
                                            min={this.state.temperatureMin}
                                            max={this.state.temperatureMax}
                                            step={this.state.temperatureStep}
                                        />
                                    </Col>
                                    <Col sm={2} md={3} lg={3}>
                                        <InputGroup.Append>
                                            <InputGroup.Text id="basic-addon2">°C</InputGroup.Text>
                                        </InputGroup.Append>
                                    </Col>
                                </InputGroup>
                            </Form.Group>
                            <Button
                                className="btn-lg btn-dark btn-block"
                                name="temperature"
                                onClick={this.handleOnClick}
                            >
                                Update
                            </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{`Last updated ${this.state.timeSince_temperatureValue} ago`}</small>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={4}>
                <Card className="crd">
                        <Card.Header>
                            <Card.Title>Curtains</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group as={Row}>
                                <InputGroup className="mb-3">
                                    <Col sm={7} md={12} lg={12}>
                                        <input 
                                            type="range"
                                            className="custom-range"
                                            name="curtains"
                                            value={this.state.curtains}
                                            onChange = {this.handleInputChange}
                                            min={this.state.curtainsMin}
                                            max={this.state.curtainsMax}
                                            step={this.state.curtainsStep}
                                        />
                                    </Col>
                                    <Col sm={3} md={9} lg={9}>
                                        <FormControl
                                            aria-describedby="basic-addon2"
                                            name="curtains"
                                            value={this.state.curtains}
                                            onChange={this.handleInputChange}
                                            min={this.state.curtainsMin}
                                            max={this.state.curtainsMax}
                                            step={this.state.curtainsStep}
                                        />
                                    </Col>
                                    <Col sm={2} md={3} lg={3}>
                                        <InputGroup.Append>
                                            <InputGroup.Text id="basic-addon2">°C</InputGroup.Text>
                                        </InputGroup.Append>
                                    </Col>
                                </InputGroup>
                            </Form.Group>
                            <Button
                                className="btn-lg btn-dark btn-block"
                                name="curtains"
                                onClick={this.handleOnClick}
                            >
                                Update
                            </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{`Last updated ${this.state.timeSince_curtainsValue} ago`}</small>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <Card className="crd">
                        <Card.Body>
                        <Card.Title>Temperature</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                {/* </CardGroup> */}
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className="crd">
                        <Card.Body>
                        <Card.Title>Temperature</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                {/* </CardGroup> */}
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className="crd">
                        <Card.Body>
                        <Card.Title>Temperature</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                {/* </CardGroup> */}
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className="crd">
                        <Card.Body>
                        <Card.Title>Temperature</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                {/* </CardGroup> */}
                </Col>
                </Row>
            </Container>
        )
    }
}

export default Kitchen;