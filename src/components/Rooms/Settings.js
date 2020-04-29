import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'

import '../../css/Room.scss'
import TimeSince from '../../TimeSince'
import PermissionCard from '../objects/PermissionCard'
import AddUserCard from "../objects/AddUserCard"

class Settings extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: ["audi", "bmw", "saab"],
            permission: "",
            permissionSwitch: false,
            timeSince_permissionValue: "",
            timeSince_permissionValueDate: 0,

            addUser: "",
            addUserSwitch: false,
            timeSince_addUserValue: "",
            timeSince_addUserValueDate: 0,
        }
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        });
        console.log(`${name}: ${value}`)
    }

    handleOnClick = (event) => {
        this.handleTimeAgo(event)
    }

    handleTimeAgo = (event) => {
        const ts = `timeSince_${event.target.name}Value`
        const tsd = `timeSince_${event.target.name}ValueDate`
        this.setState({
            [ts]: TimeSince(this.state[tsd]),
            [tsd]: new Date()
        });
    }

    wasSwitchChanged = (event) => {
        const name = `${event.target.name}Switch`;
        this.setState({
            [name]: !this.state[name]
        });
        console.log(`${name}: ${this.state[name]}`)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={4}>
                        <PermissionCard
                            lists={this.state.lists}
                            wasSwitchChanged={this.wasSwitchChanged}
                            permissionSwitch={this.state.permissionSwitch}
                            timeSince_permissionValue={this.state.timeSince_permissionValue}
                            handleInputChange={this.handleInputChange}
                            handleOnClick={this.handleOnClick}
                        />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4}> {/* patikrint ar toks useris neegzistuoja */}
                        <AddUserCard
                            addUser={this.state.addUser}
                            wasSwitchChanged={this.wasSwitchChanged}
                            addUserSwitch={this.state.addUserSwitch}
                            timeSince_addUserValue={this.state.timeSince_addUserValue}
                            handleInputChange={this.handleInputChange}
                            handleOnClick={this.handleOnClick}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Settings;