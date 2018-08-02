import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {  //Help for the map taken from https://bit.ly/2MbUOGi
  static propTypes = {

  }
   render() {
   const CompositeGoogleMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 37.9838096, lng: 23.7275388 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <CompositeGoogleMap //markers = {markers}
        /*onMarkerClicked = {onLocationClicked}
        appCenter = {newCenter}
        onToggleOpen = {handleToggleOpen}
        showInfoIndex = {showInfoIndex}
        markerIcon = {markerIcon}
        zoom = {zoom}*/
        containerElement={ <div style={{ height: `500px`, width: '75%' }} /> }
        mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
