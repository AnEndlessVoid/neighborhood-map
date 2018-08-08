import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import Navbar from "./components/Navbar/Navbar.js";
import SideDrawer from "./components/Navbar/SideDrawer.js";
import Backdrop from './components/Navbar/Backdrop.js';
import markerIcon from './marker.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    sideDrawerOpen: false, //for the hamburger menu to be closed by default
    locations : [],
    originalLocations : [],
    markers : [],
    markerIcon : markerIcon,
    defaultMarkerIcon : markerIcon,
    defaultCenter : {lat: 37.9838096, lng: 23.7275388},
    newCenter : {lat: 37.9838096, lng: 23.7275388},
    isOpen : false,
    selectedLocation : null,
    //isAnimated : false
  };

}

  componentWillMount() {
    this.setState({
      markerIcon: markerIcon,
      defaultMarkerIcon: markerIcon
    })
  }


  componentDidMount() { //fetched the locations with forsquare API and mapped through them in Map.js
      const url = `https://api.foursquare.com/v2/venues/explore?client_id=PFGCHRSKRSOWAKMOCYP3IS0YUB315OZ4Y5HFDGQOOX0K2CXR&client_secret=BWDVZOU2PWLGIOHREUFFGJUMRCR5Z50BEFQPS02GBSSZWODY&v=20180801&near=Athens&query=sights&limit=10`;
      window.gm_authFailure = this.gm_authFailure;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            locations: data.response.groups[0].items,
            markers: data.response.groups[0].items
          });
        })
        .catch(e => {
          console.log("Error:", e);
          alert('There seems to be a problem with the FourSquare API response. Please reload the page.')
          this.setState({ locations: [] });
        });

        fetch(this.state.urlMaps, {mode: 'no-cors'})
        .then(function(response) {
          // console.log(response);
        }).catch(function(error) {
          alert('There seems to be a problem with the Google Maps API response. Please reload the page.', error)
        });

    }

  toggleActiveLocation = ({lat,lng}, marker) => {
    this.setState({
      newCenter : {lat,lng},
      zoom : 17,
      isAnimated : true,
      selectedLocation : marker
    });
  };

  toggleAnimation = marker => {
    this.setState({
      selectedLocation : marker,
      isAnimated : false
    })
  }

    /*Infowindow functionality*/
  onToggleOpen = (event, marker) => {
    this.setState({
      selectedLocation : marker,
      isOpen : !this.state.isOpen
    });
  };

  onToggleClose = () => {
    this.setState({
      selectedLocation : null
    });
  };
    /*Sidebar functionality*/
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.siteDrawerOpen}
    });
  }; //the open and closing of the hamburger menu Handler

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  /*Search functionality*/

  fullLocationList(){
    this.setState({
      searchOn : false,
      markers : this.state.locations
    });
  }

  searchEventHandler(event){
    const newLocation = this.state.locations.filter(
      location => location.venue.name === event.target.value);
    this.setState({
      newLocation : newLocation,
      searchOn : true,
      markers : newLocation
    });
    event.preventDefault();
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click = {this.backdropClickHandler} />
}
return (
  <div style={{height: '100%'}}className="App">
    <Navbar drawerClickHandler = {this.drawerToggleClickHandler} />
    <SideDrawer 
    locations = {this.state.locations}
    show = {this.state.sideDrawerOpen} />
    {backdrop}
    <main style={{marginTop: '64px'}}>
    <Map
    locations={this.state.locations}
    markers = {this.state.markers}
    toggleActiveLocation = {this.toggleActiveLocation}
    isOpen = {this.state.isOpen}
    selectedLocation = {this.state.selectedLocation}
    onToggleOpen = {this.onToggleOpen}
    onToggleClose = {this.onToggleClose}
    animation = {this.state.animation}
    isAnimated = {this.state.isAnimated}
    toggleAnimation = {this.toggleAnimation}
    />
      </main>
    </div>
)
}
}

export default App;
