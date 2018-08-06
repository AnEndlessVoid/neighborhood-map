import React, {Component} from 'react';


/*const fetchVenues = () => {
  fetch(
    'https://api.foursquare.com/v2/venues/search?ll=37.9838096,23.7275388&query=restaurant&radius=1000&limit=20&client_id=PFGCHRSKRSOWAKMOCYP3IS0YUB315OZ4Y5HFDGQOOX0K2CXR&client_secret=BWDVZOU2PWLGIOHREUFFGJUMRCR5Z50BEFQPS02GBSSZWODY&v=20180801'
  )
    .then(res => res.json)
    .then(venues =>
            this.setState({
              venues: venues.data
            })
          );
}

export const venues = []*/

export let venues = [];

fetch(`https://api.foursquare.com/v2/venues/search?ll=37.9838096,23.7275388&query=restaurant&radius=1000&limit=20&client_id=PFGCHRSKRSOWAKMOCYP3IS0YUB315OZ4Y5HFDGQOOX0K2CXR&client_secret=BWDVZOU2PWLGIOHREUFFGJUMRCR5Z50BEFQPS02GBSSZWODY&v=20180801`)
    .then(response => response.json())
    .then(venues : data.venue);
