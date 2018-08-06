import React from 'react';
import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return ( /*passed the open/close info to the <SideDrawer />*/
  <nav className = {drawerClasses}>
    <ul>
        <li></li>
        <li></li>
    </ul>
  </nav>
);
};

export default SideDrawer;
