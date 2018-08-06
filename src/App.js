import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';
import {venues} from './components/Venues.js'
import Navbar from "./components/Navbar/Navbar.js";
import SideDrawer from "./components/Navbar/SideDrawer.js"
import Backdrop from './components/Navbar/Backdrop.js'
import markerIcon from './marker.png';
import * as API from './components/API.js';

class App extends Component {
  state = {
    sideDrawerOpen: false, //for the hamburger menu to be closed by default
    locations : [],
    originalLocations : [],
    markerIcon : markerIcon,
    defaultMarkerIcon : markerIcon,
    defaultCenter : {lat: 37.9838096, lng: 23.7275388},
    newCenter : {lat: 37.9838096, lng: 23.7275388}
  };

  componentWillMount() {
    this.setState({
      markerIcon: markerIcon,
      defaultMarkerIcon: markerIcon
    })
  }


  componentDidMount() {

    function handleErrors(response) {
      if (!response.ok) {
    //console.log('response status Text',  response)
        throw Error(response.statusText);
  }
  return response;
}
  API.getLocationsAll()
  //.then(handleErrors)
  .then((locations) => {
    this.setState({locations})
    this.setState({originalLocations: locations})
  }).catch((error) => {
    alert('Error While getting All Locations data from FourSquare API >> Sorry!! Locations Data Will not be loaded or displayed ')
    console.log('Error While Getting All Locations')
  })
}

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
    locations={this.state.locations}/>
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
