import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
    let.tabIndex = 0;
    let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  if (props.sidebarClosed){
    tabIndex -= 1
  }
  return ( /*passed the open/close info to the <SideDrawer />*/
  <nav className = {drawerClasses}>
    <ul>
    {props.locations.map(location => (
      <li>{location.venue.name}</li>
      ))}
        
    </ul>
  </nav>
  );
};

export default SideDrawer;
