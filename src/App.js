  
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from './Navigation'
import Topbar from './Topbar'
import Login from './Login'
import Kitchen from './components/Kitchen'
import Garage from './components/Garage'
import Bathroom from './components/Bathroom'
import Bedroom from './components/Bedroom'
import Electricity from './components/Electricity'
import Security from './components/Security'
import Settings from './components/Settings'

export default () => {
  return <Router>
    <Switch>
      <Route path="/" exact component = {Login}></Route>
      <Navigation />
      <Topbar />
      <Route path="/kitchen" component = {Kitchen}></Route>
      <Route path="/garage" component = {Garage}></Route>
      <Route path="/bedroom" component = {Bedroom}></Route>
      <Route path="/bathroom" component = {Bathroom}></Route>
      <Route path="/security" component = {Security}></Route>
      <Route path="/electricity" component = {Electricity}></Route>
      <Route path="/settings" component = {Settings}></Route>
    </Switch>
  </Router>
};