import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
    let tabIndex = 0;
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
    style = {{background : "red", width : "200px"}}
    aria-label = "Dropdown"
    >
    <form>
      <select onChange = {props.searchEventHandler}
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
            <p
            onClick = {props.fullLocationList}
            onKeyPress = {props.fullLocationList}
            tabIndex = {tabIndex}
            > Clear 
            </p>
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
                onClick = {event =>{
                  props.onToggleOpen(event, location.venue.id)
                }}
                onKeyPress = {event => {
                  props.onToggleOpen(event, location.venue.id)
                }}
                key = {location.venue.id}
                id = {location.venue.id}  
              >
              {location.venue.name}
              </li>
          ))
        )}
      </ul>
   </div>
    <div>
      <ul>
        {props.locations.map(location => (
          <li key = {location.venue.id}>{location.venue.name}</li>
          ))}
      </ul>
    </div>
  </nav>
  );
};

export default SideDrawer;
