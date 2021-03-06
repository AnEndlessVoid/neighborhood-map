import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
    let tabIndex = 0; /*found the equivalent of HTML's tabindex here : https://reactjs.org/docs/dom-elements.html*/
    let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  if (props.sidebarClosed){
    tabIndex -= 1
  }
  return ( /*passed the open/close info to the <SideDrawer />*/
  <nav className = {drawerClasses}>
    <div className = "dropdown" 
    aria-label = "Dropdown"
    >
    <form>
      <select onChange = {(event) => props.searchEventHandler(event.target.value)}
        aria-label = "location selection">
        {props.locations.map(location => (
          <option key = {location.venue.id} 
          value = {location.venue.name}
          >
          {location.venue.name}
          </option>
          ))}
      </select>
      </form>
      <ul> {
        props.displayMenu ? (
          <div>
            <li
            onClick = {event => 
              {props.onToggleOpen(event, props.newLocation[0].venue.id)
            }}
            onKeyPress = {event => {
              props.onToggleOpen(event, props.newLocation[0].venue.id)
            }}
            tabIndex = {tabIndex}
            id = {props.newLocation[0].venue.id}
            key = {props.newLocation[0].venue.id}
            >
            {props.newLocation[0].venue.name}
            </li>
          </div>
          ) : (
            props.locations.map(location => (
              <li
                className = "location-list"
                onClick = {event =>{
                  props.onToggleOpen(event, location.venue.id)
                }}
                onKeyPress = {event => {
                  props.onToggleOpen(event, location.venue.id)
                }}
                key = {location.venue.id}
                id = {location.venue.id}
                role = 'button'
                tabIndex = {tabIndex}  
              >
              {location.venue.name}
              </li>
          ))
        )}
      </ul>
   </div>

  </nav>
  );
};

export default SideDrawer;
