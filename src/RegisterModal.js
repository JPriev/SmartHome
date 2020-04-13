import React, { Component } from "react"
import { Container, Modal, Button, InputGroup, FormControl} from 'react-bootstrap';

import Login from './Login'

const RegisterModal = (props) => {
    return (
        <Container>
            <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Registration</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <form className="register-form" >
                        <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Username</InputGroup.Text>
                                        </InputGroup.Prepend>
                                            <FormControl
                                                type="text"
                                                name="username"
                                                placeholder="Enter your username"
                                            />
                        </InputGroup>
                    </form>
                                
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="dark">Next</Button>
                        <Button variant="light" onClick={props.handleModalOpen}>Close</Button>
                        
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </Container>
    )
}

export default RegisterModal;