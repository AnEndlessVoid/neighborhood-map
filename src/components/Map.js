import React, { Component } from 'react';
import {compose, withProps, withStateHandlers} from "recompose"
import { withGoogleMap, GoogleMap, Marker, InfoWindow, withScriptjs } from 'react-google-maps';

const Map = compose(
     withProps({
       googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8v53M-4E8CxXiqbvKVMxkSgdpfn2aiaw",
       loadingElement: <div style={{ height: '100%' }} />,
       containerElement: <div style={{height: '500px', width: '100%'}} />,
       mapElement: <div style={{ height: '100%' }} />,
     }),
     withStateHandlers(() => ({
       isOpen: false,
     }), {
       onToggleOpen: ({ isOpen }) => () => ({
         isOpen : !isOpen,
       })
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
     let markerComp = (
       <Marker
          key = {location.venue.id}
          id = {location.venue.id}
          name = {location.venue.name}
          position = {{ lat, lng }}
          street = {location.venue.location.formattedAddress[0]}
          address = {location.venue.location.formattedAddress[1]}
          aria-label = "marker information"
          animation = {location.venue.id === props.selectedLocation && props.isAnimated ? 1 : -1}
          onClick = {event => {
            console.log(props)
            //props.toggleActiveLocation({lat, lng}, location.venue.id)
            props.onToggleOpen(event, location.venue.id)
          }}
        >
        {props.selectedLocation === location.venue.id && (
          <InfoWindow onCloseClick={props.onToggleClose}
            ///() => {
            ///props.toggleAnimation(props.isAnimated);
            ///props.onToggleOpen();
          ///}}
            > //help taken from https://bit.ly/2MnXz7v
            <div aria-label = {`Information about ${location.venue.name}`}>
              <h1>{location.venue.name}</h1>
              <h2>Address:</h2>
              <p>{location.venue.location.formattedAddress[0]}</p>
              <p>{location.venue.location.formattedAddress[1]}</p>
                //{props.locations[props.selectedLocation].name}
              </div>
          </InfoWindow>
        )}
        </Marker>
        );
  return markerComp;
})}
    </GoogleMap>
  ));

  export default Map;
