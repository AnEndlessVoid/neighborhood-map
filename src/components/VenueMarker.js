import React, {Component} from 'react';
import {Marker, InfoWindow} from 'react-google-maps';
import {markerIcon} from '../marker.png';
import {Map} from './MapContainer.js';
//import {VenueMapCard} from "./VenueMapCard"

export default class VenueMarker extends Component{
  render(){
    return(
      <Marker
        position = {this.props.location}
        icon = {markerIcon}
        >
        </Marker>
    );
  }
}
