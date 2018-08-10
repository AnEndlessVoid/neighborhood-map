import React from 'react';
import './Navbar.css';
import DrawerToggleButton from './DrawerToggleButton.js';

const Navbar = props => (
  <header className = "navbar">
    <nav className = "navbar-navigation">
        <div className = "navbar-toggle-button" tabIndex = "0">
          <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className = "navbar-logo">NEIGHBORHOOD MAP</div>
        <div className = "spacer" />

    </nav>
  </header>
);

export default Navbar
