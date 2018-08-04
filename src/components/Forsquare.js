import React, { Component } from 'react';
import './App.css';

class ForsquareComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMarker : props.activeMarker
      venues : []
    };
  }

  componentDidMount(){
    const endPoint='https:///api.foursquare.com/v2/venues/search?';
    const params={
      client_id : 'PFGCHRSKRSOWAKMOCYP3IS0YUB315OZ4Y5HFDGQOOX0K2CXR',
      client_secret : 'BWDVZOU2PWLGIOHREUFFGJUMRCR5Z50BEFQPS02GBSSZWODY',
      ll : 37.9838096,23.7275388,
      query : restaurant,
      intent : 'browse',
      v : 20180801,
      radius : 1000,
      limit : 20
    };
    fetch(endPoint + new URLSearchParams(params))
    .then(response => {
      this.setState({
      venues: response.data.response.venues
    });
      // When data have been fetched, they get passed to parent
      this.props.updateVenues(this.state.venues);
    })
    // If the fetching fails, an error is thrown in the console
    .catch((response) => {
      console.log('error retreiving data: ' + response);
    })
  }
}
