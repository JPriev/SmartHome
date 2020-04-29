import React, { Component } from 'react';
import { Container, Row, Button, InputGroup, FormControl, ButtonToolBar } from 'react-bootstrap';

import axios from 'axios';
  
import './css/Login.css'
import RegisterModal from './RegisterModal'
import Register from './Register'
    class Login extends Component{
        constructor(props){
            super(props)
            
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.login = this.login.bind(this);

        this.state = {
                username: "",
                password: ""
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
  

        login(e) {
            e.preventDefault();
        
            const user = {
              username: this.state.username,
              password: this.state.password
            }
        
            console.log(user);
        
            axios.get('http://localhost:5000/user/check', user)
              .then(res => console.log(res.data));
              
          }
          
          register(){
            window.location = '/register'
          }
     render(){
        let modalClose = () => this.setState({modalShow:false});
        
        return (
            <div className="Login">
                <Container>
                <Row>
                        <form className="login-form" onSubmit={this.login} >
                            
                                <h1 className="text-center">
                                    <span className="font-italic">Smart</span><span className="font-weight-bold">Home</span>
                                </h1>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Username</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        id="username"
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
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        name="password"
                                        onChange={this.onChangePassword}
                                    />
                                </InputGroup>
                                <Button className="btn-lg btn-dark btn-block" type="submit">Login</Button>
                                {/* <Button variant="outline-dark" className="btn-lg btn-light btn-block"  onClick={ () => this.setState({modalShow: true})}>Register</Button> */}
                                <Button className="btn-lg btn-dark btn-block" onClick={this.register}>Register</Button>
                                
                                  
                                </form>
                                
                    </Row>
                    {/* <RegisterModal show={this.state.modalShow} onHide={modalClose}/> */}
                </Container>
            </div>
        )
    }
}
export default Login;