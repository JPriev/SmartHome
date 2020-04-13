import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'

import '../css/Room.css'
import Topbar from '../Topbar'
import Navigation from '../Navigation'

class Electricity extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container>
                {/* <Navigation /> */}
                {/* <Row>
                    <Col xs={12}>
                        <Topbar />
                    </Col>
                </Row> */}
                <Row>
                    <Col xs={12}>
                        <div>
                            <h1>Electricity</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Electricity;