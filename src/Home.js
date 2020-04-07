import React, { Component } from "react"
import { Button, Container } from 'react-bootstrap'


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: props.history.location.state.username,
            password: props.history.location.state.password
        }
    }

    handleInputChange = () =>{
        console.log(this.props)
    }

    render() {
        return (
            <Container>
                <div>
                    <p>{`ka tu, ${this.state.username} ${this.state.password}`}</p>
                </div>
            </Container>
        )
    }
}

export default Home;