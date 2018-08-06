import React from 'react';
import './Navbar.css';
import DrawerToggleButton from './DrawerToggleButton.js';

const Navbar = props => (
  <header className = "navbar">
    <nav className = "navbar-navigation">
        <div className = "navbar-toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className = "navbar-logo">'THE LOGO'</div>
        <div className = "spacer" />
        <div className = "toolbar-navigation-items">
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
    </nav>
  </header>
);

export default Navbar
