  
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import Navigation from './Navigation'
// import Topbar from './Topbar'
// import Login from './Login'
// import Kitchen from './components/Kitchen'
// import Garage from './components/Garage'
// import Bathroom from './components/Bathroom'
// import Bedroom from './components/Bedroom'
// import Electricity from './components/Electricity'
// import Security from './components/Security'
// import Settings from './components/Settings'

// export default () => { // perkelt Navigation ir Topbar
//   return <Router>
//     <Switch>
//       <Route path="/" exact component = {Login}></Route>
//       <Navigation /> 
//       <Topbar />
//       <Route path="/kitchen" component = {Kitchen}></Route>
//       <Route path="/garage" component = {Garage}></Route>
//       <Route path="/bedroom" component = {Bedroom}></Route>
//       <Route path="/bathroom" component = {Bathroom}></Route>
//       <Route path="/security" component = {Security}></Route>
//       <Route path="/electricity" component = {Electricity}></Route>
//       <Route path="/settings" component = {Settings}></Route>
//     </Switch>
//   </Router>
// };

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Login from './Login'
import Kitchen from './components/Kitchen'
import Garage from './components/Garage'
import Bathroom from './components/Bathroom'
import Bedroom from './components/Bedroom'
import Electricity from './components/Electricity'
import Security from './components/Security'
import Settings from './components/Settings'

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

      if (this.state.SideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }

      return (
        <Router>
          <div style={{height: '100%'}}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.SideDrawerOpen}/>
            {backdrop}
          </div>
          <Switch>
              <Route path="/" exact component = {Login}></Route>
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