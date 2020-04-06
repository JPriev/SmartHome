  
import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

function Login() {
    return <Container>
        <Row>
            <form> {/* neveikia xs={12} del form */}
                <Col xs={12}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Username</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type="text"
                            placeholder="Enter your username"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                </Col>
                <Col xs={12}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type="password"
                            placeholder="Enter your password"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                </Col>
                <Col xs={12}>
                    <Button color="primary">Login</Button>
                </Col>
            </form>
        </Row>
    </Container>

{/* <form onSubmit={this.login}>
<FormGroup controlId="email" validationState={ formSubmitted ? (errors.email ? 'error' : 'success') : null }>
    <ControlLabel>Email</ControlLabel>
    <FormControl type="text" name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
{ errors.email &&
    <HelpBlock>{errors.email}</HelpBlock>
}
</FormGroup>
<FormGroup controlId="password" validationState={ formSubmitted ? (errors.password ? 'error' : 'success') : null }>
    <ControlLabel>Password</ControlLabel>
    <FormControl type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
{ errors.password &&
    <HelpBlock>{errors.password}</HelpBlock>
}
</FormGroup>
<Button type="submit" bsStyle="primary">Sign-In</Button>
</form> */}
            // <div class="container" style="margin-top:20px;">
            
            //     <form>
            //         <div class="form-group row">
            //             <label class="col-sm-3 col-form-label" for="email">Email Address</label>
            //             <div class="col-sm-9">
            //                 <input type="text" class="form-control" id="email">
            //         </div>
                    
            //         <div class="form-group row">
            //             <label class="col-sm-3 col-form-label" for="password">Password</label>
            //             <div class="col-sm-9">
            //                 <input type="password" class="form-control" id="password">
            //             </div>
            //         </div>
                    
            //         <div class="row">
            //             <div class="col-sm-9 offset-sm-3">
            //                 <button type="submit" class="btn btn-primary">Login Now</button>
            //             </div>
            //         </div>
                    
            //     </form>
            
            // </div>
}

export default Login;