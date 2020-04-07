import React, { Component, useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

import './css/Login.css'
import User from './User'
import RegisterModal from './RegisterModal'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            user: {
                username: "labas",
                password: "krabas"
            }
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = (e) => {
        // const [attempts, setAttempts] = useState(""); // kas karta paleidziant validation attempts bus 3
        
        if (this.validation(e) == true) {
            this.redirectToTarget()
        } else {
            console.log("bad login info")
            // if (this.attempts != 0) {
            //     this.attempts--
            // } else {
            //     console.log("attempts = 0")
            //     this.attempts = 3
            // }
            // console.log(this.attempts)
        }
        // if (validation === true) {
        //     this.redirectToTarget()
        // } else {
        //     // alert pop-up
        //     // attempts--
        // }
        // this.state.user.username ? () => {

        //     console.log("logged in")
        //     } : () => {
        //         setAttempts();
        //         // Alert message
        //     };
    }

    validation = (event) => {
        if (this.attempts > 0) {
            if (this.state.password.length >= 4) { 
                if (this.state.username === this.state.user.username) {
                    if (this.state.password === this.state.user.password) {
                        return true
                    } else {
                        console.log("Invalid password")
                        return false
                    }
                } else {
                    console.log("Invalid username")
                    return false
                }
            } else {
                console.log("password is too short")
                console.log(this.state.password.length)
            }
        } else {
            return false
        }
    }

    redirectToTarget = () => {
        this.props.history.push({
            pathname: '/home',
            state: { username: this.state.username, password: this.state.password } // perduot user_id ir privilege
          })
    }

    handleRegister = () => {
        
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
                                        name="username"
                                        placeholder="Enter your username"
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
                                        name="password"
                                        onChange={this.handleInputChange}
                                    />
                                </InputGroup>
                            {/* </Col>
                            <Col xs={12}> */}
                                <Button className="btn-lg btn-dark btn-block" type="submit">Login</Button>
                                <Button onClick={this.handleRegister} className="btn-lg btn-light btn-block">Register</Button>
                            {/* </Col> */}
                        </form>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login;