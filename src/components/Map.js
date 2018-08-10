import React from 'react';
import {compose, withProps} from "recompose"
import { withGoogleMap, GoogleMap, Marker, InfoWindow, withScriptjs } from 'react-google-maps';

const Map = compose(
     withProps({
      /*Map rendered with help from https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb*/
       googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8v53M-4E8CxXiqbvKVMxkSgdpfn2aiaw",
       loadingElement: <div style={{ height: '100%' }} />,
       containerElement: <div style={{height: '500px', width: '100%'}} />,
       mapElement: <div style={{ height: '100%' }} />,
     }),
   withScriptjs, /*https://tomchentw.github.io/react-google-maps/#withscriptjs*/
   withGoogleMap
 )((props) => (
   <GoogleMap
       defaultZoom = {13}
       defaultCenter = { { lat: 37.9838096, lng: 23.7275388 } }
     >
   {props.markers.map(location => {
     const {lat, lng} = location.venue.location;
     let markerComp = (
       <Marker /*https://stackoverflow.com/questions/43859785/how-do-i-display-multiple-markers-with-react-google-maps*/
       /*Asignment of all the locations information I need for my InfoWindow Later*/
          key = {location.venue.id}
          id = {location.venue.id}
          name = {location.venue.name}
          position = {{ lat, lng }}
          street = {location.venue.location.formattedAddress[0]}
          address = {location.venue.location.formattedAddress[1]}
          aria-label = "marker information"
          onClick = {event => {
            props.onToggleOpen(event, location.venue.id)
          }}
          animation={props.selectedLocation === location.venue.id ? 1 : null}
        >
        /* InfoWindow displayed one at a time help from https://stackoverflow.com/questions/50399464/react-google-maps-infowindow-toggle-display-one-at-a-time/50427200#50427200*/
        {props.selectedLocation === location.venue.id && (
          <InfoWindow
          key = {location.venue.id}
          onCloseClick={props.onToggleClose}
          tabIndex = {0}
            > 
            <div aria-label = {`Information about the selected place`}>
              <h1>{location.venue.name}</h1>
              <h2>Address:</h2>
              <p>{location.venue.location.formattedAddress[0]}</p>
              <p>{location.venue.location.formattedAddress[1]}</p>
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
