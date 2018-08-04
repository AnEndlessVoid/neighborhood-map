import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';
import {venues} from './components/Venues.js'

class App extends Component {
  state = {
    venues : [],
    venue : {}
  }
  render() {
    return (
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
}

export default App;
