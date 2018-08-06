import React, { Component } from 'react';
import {compose, withProps} from "recompose"
import { withGoogleMap, GoogleMap, Marker, InfoWindow, withScriptjs } from 'react-google-maps';
/*import {Map} from './MapContainer.js';*/
import VenueMarker from './VenueMarker.js';



const Map = compose(
     withProps({
       googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8v53M-4E8CxXiqbvKVMxkSgdpfn2aiaw",
       loadingElement: <div style={{ height: '100%' }} />,
       containerElement: <div style={{height: '500px', width: '100%'}} />,
       mapElement: <div style={{ height: '100%' }} />,
     }),
   withScriptjs,
   withGoogleMap
 )((props) => (
   <GoogleMap
       defaultZoom = {13}
       defaultCenter = { { lat: 37.9838096, lng: 23.7275388 } }
     >
   {props.markers.map(location => {
     const {lat, lng} = location.venue.location;
     let markersElement = (
       <Marker
          key = {location.venue.id}
          id = {location.venue.id}
          name = {location.venue.name}
          position = {{ lat, lng }}
          street = {location.venue.location.formattedAddress[0]}
          address = {location.venue.location.formattedAddress[1]}
          aria-label = "marker information"
        >

        </Marker>
        );
  return markersElement;
})}
    </GoogleMap>
  ));

  export default Map;
