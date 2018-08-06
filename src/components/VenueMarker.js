import React, {Component} from 'react';
import {Marker, InfoWindow} from 'react-google-maps';
import {markerIcon} from '../marker.png';
import {Map} from './MapContainer.js';
//import {VenueMapCard} from "./VenueMapCard"

export default class VenueMarker extends Component{
  render(){
    return(
      <Marker
        key = {this.props.index}
        id = {this.props.venueId}
        position = {this.props.position}
        title = {this.props.title}
        icon = {markerIcon}
        >
        </Marker>
    );
  }
}
