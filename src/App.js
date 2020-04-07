  
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from './Login'
import Home from './Home'

export default () => {
  return <Router>
    <Switch>
      <Route path="/" exact component = {Login}></Route>
      <Route path="/home" component = {Home}></Route>
    </Switch>
  </Router>
};