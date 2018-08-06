import React, { Component } from 'react';
import {compose, withProps} from "recompose"
import { withGoogleMap, GoogleMap, Marker, InfoWindow, withScriptjs } from 'react-google-maps';
import {Map} from './MapContainer.js';
import VenueMarker from './VenueMarker.js';



  const MyGoogleMapComponent = compose(
     withProps({
       googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8v53M-4E8CxXiqbvKVMxkSgdpfn2aiaw",
       loadingElement: <div style={{ height: '100%' }} />,
       containerElement: <div style={{height: '500px', width: '100%'}} />,
       mapElement: <div style={{ height: '100%' }} />,
     }),
   withScriptjs,
   withGoogleMap
 )((props) =>{
   const markers = props.locations.map(location => <VenueMarker
                    key = {location.id}
                    venue = {location.name}
                    location = {{lat:location.lat, lng:location.lng}}
                  />);
  return(
    <GoogleMap
        defaultZoom = {13}
        defaultCenter = { { lat: 37.9838096, lng: 23.7275388 } }
      >
      {markers}
    </GoogleMap>
    )
  });


 export default MyGoogleMapComponent
