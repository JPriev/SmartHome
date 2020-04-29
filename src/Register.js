import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Button, InputGroup, FormControl, ButtonToolBar } from 'react-bootstrap';


export default class Register extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }
  

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(user);

    axios.post('http://localhost:5000/user/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      password: ''
    })
    window.location = '/';
  }

  render() {
    return (
      <div className="Register">
      <Container>
      <Row>
              <form className="login-form" onSubmit={this.onSubmit} >
                  
                      <h1 className="text-center">
                        <span className="font-weight-bold">Register</span>
                      </h1>
                      <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                              <InputGroup.Text id="inputGroup-sizing-default">Username</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                              type="username"
                              name="username"
                              placeholder="Enter your username"
                              onChange={this.onChangeUsername}
                          />
                      </InputGroup>
                      <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                              <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                              type="password"
                              placeholder="Enter your password"
                              name="password"
                              onChange={this.onChangePassword}
                          />
                      </InputGroup>
                     
                      <Button className="btn-lg btn-dark btn-block" type="submit">Register</Button>
                        
                      </form>
                      
          </Row>
          {/* <RegisterModal show={this.state.modalShow} onHide={modalClose}/> */}
      </Container>
  
      </div>
  
      
    )
  }
}