import React, { Component } from 'react';
import {compose, withProps} from "recompose"
import { withGoogleMap, GoogleMap, Marker, InfoWindow, withScriptjs } from 'react-google-maps';


  const MyGoogleMapComponent = compose(
     withProps({
       googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8v53M-4E8CxXiqbvKVMxkSgdpfn2aiaw",
       loadingElement: <div style={{ height: '100%' }} />,
       containerElement: <div style={{height: '500px', width: '100%'}} />,
       mapElement: <div style={{ height: '100%' }} />,
     }),
   withScriptjs,
   withGoogleMap
 )((props) =>
      <GoogleMap
        defaultZoom = { 13 }
        defaultCenter = { { lat: 37.9838096, lng: 23.7275388 } }
      >
      {props.isMarkerShown && <Marker position = {{lat:37.9838096, lng: 23.7275388 }}/>}
      </GoogleMap>
   );
class Map extends Component {  //Help for the map taken from https://bit.ly/2MbUOGi
   render() {
     return(
      <div>
        <MyGoogleMapComponent //markers = {markers}
        /*onMarkerClicked = {onLocationClicked}
        appCenter = {newCenter}
        onToggleOpen = {handleToggleOpen}
        showInfoIndex = {showInfoIndex}
        markerIcon = {markerIcon}
        zoom = {zoom}*/
        />
      </div>
   )
  }
 };

 export default MyGoogleMapComponent
