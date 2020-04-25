import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'

import '../css/Room.css'
import PermissionCard from './objects/PermissionCard'

class Settings extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <PermissionCard

                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Settings;