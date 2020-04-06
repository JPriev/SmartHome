  
import React, { Component } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

import './css/Login.css'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            formData: {},
            formSubmitted: false,
            loading: false
        }
    }

    handleInputChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    login = (e) => {
        console.log("logged in")
    }

    render() {
        return (
            <div className="Login">
                <Container>
                    <Row>
                        <form className="login-form" onSubmit={this.login}> {/* neveikia xs={12} del form */}
                            {/* <Col xs={12}> */}
                                <h1 className="text-center">
                                    <span className="font-italic">Smart</span><span className="font-weight-bold">Home</span>
                                </h1>
                            {/* </Col>
                            <Col xs={12}> */}
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Username</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter your username"
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        onChange={this.handleInputChange}
                                    />
                                </InputGroup>
                            {/* </Col>
                            <Col xs={12}> */}
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        type="password"
                                        placeholder="Enter your password"
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        onChange={this.handleInputChange}
                                    />
                                </InputGroup>
                            {/* </Col>
                            <Col xs={12}> */}
                                <Button className="btn-lg btn-dark btn-block" type="submit" color="primary">Login</Button>
                            {/* </Col> */}
                        </form>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login;