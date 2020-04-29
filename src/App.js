import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Register from './Register'
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Login from './Login'
import Kitchen from './components/Rooms/Kitchen'
import Garage from './components/Rooms/Garage'
import Bathroom from './components/Rooms/Bathroom'
import Bedroom from './components/Rooms/Bedroom'
import Electricity from './components/Rooms/Electricity'
import Security from './components/Rooms/Security'
import Settings from './components/Rooms/Settings'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          SideDrawerOpen: false
        }
    }

    drawerToggleClickHandler = () => {
      this.setState((prevSate) => {
        return {
          SideDrawerOpen: !prevSate.SideDrawerOpen
        }
      });
    }

    backdropClickHandler = () => {
      this.setState({
        SideDrawerOpen: false
      })
    }

    render() {
      let backdrop;

      let loggedIn = true;
      let topbar;

      if (this.state.SideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }

      if (loggedIn) {
        topbar = (
          <div style={{height: '100%'}}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.SideDrawerOpen} closeBackdrop={this.drawerToggleClickHandler}/>
            {backdrop}
          </div>
        )
      }

      return (
        <Router> {/* if logged in */}
          {topbar}
          <Switch>
              <Route path="/" exact component = {Login}></Route>
			  <Route path="/register" component = {Register}></Route>
              <Route path="/kitchen" component = {Kitchen}></Route>
              <Route path="/garage" component = {Garage}></Route>
              <Route path="/bedroom" component = {Bedroom}></Route>
              <Route path="/bathroom" component = {Bathroom}></Route>
              <Route path="/security" component = {Security}></Route>
              <Route path="/electricity" component = {Electricity}></Route>
              <Route path="/settings" component = {Settings}></Route>
          </Switch>
        </Router>
      )
    }
  }

export default App