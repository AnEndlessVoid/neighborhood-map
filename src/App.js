import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';
import {venues} from './components/Venues.js'
import Navbar from "./components/Navbar/Navbar.js";
import SideDrawer from "./components/Navbar/SideDrawer.js"
import Backdrop from './components/Navbar/Backdrop.js'

class App extends Component {
  state = {
    sideDrawerOpen: false, //for the hamburger menu to be closed by default
    venues : [],
    venue : {}
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.siteDrawerOpen}
    });
  }; //the open and closing of the hamburger menu Handler

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click = {this.backdropClickHandler} />
}
return (
  <div style={{height: '100%'}}className="App">
    <Navbar drawerClickHandler = {this.drawerToggleClickHandler} />
    <SideDrawer show = {this.state.sideDrawerOpen} />
    {backdrop}
    <main style={{marginTop: '64px'}}>
    <Map
    venues={venues}/>
      </main>
    </div>
)
}
}


/////BEFORE SIDEBAR
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Map
        venues={venues}/>
      </div>
    );
  }
}*/

export default App;
