  
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './Login'

export default () => {
  return <Router>
    <Switch>
      <Route path="/" component = {Login}>
      </Route>
    </Switch>
  </Router>
};