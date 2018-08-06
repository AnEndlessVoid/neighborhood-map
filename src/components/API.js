const api= 'https://api.foursquare.com/v2'
const proxyurl = "https://sheltered-headland-14246.herokuapp.com/"
// Code taken from Udacity's FEND Project 7-MyReads App starter code
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
export const getLocationsAll = () =>
  fetch(`${api}/venues/search?ll=37.9838096,23.7275388&query=restaurant&radius=1000&limit=20&client_id=PFGCHRSKRSOWAKMOCYP3IS0YUB315OZ4Y5HFDGQOOX0K2CXR&client_secret=BWDVZOU2PWLGIOHREUFFGJUMRCR5Z50BEFQPS02GBSSZWODY&v=20180801`)
    .then(handleErrors)
    .then(res => res.json())
    .then(data => data.response.venues)
    .catch(error => {console.log('Error While getting All Locations data from FourSquare API', error)})

export const getVenueDetails = (venueId)=> {
let venueDetailsUrl =[`/venues/${venueId}?`,
					  `client_id=PFGCHRSKRSOWAKMOCYP3IS0YUB315OZ4Y5HFDGQOOX0K2CXR`,
					  `&client_secret=BWDVZOU2PWLGIOHREUFFGJUMRCR5Z50BEFQPS02GBSSZWODY`].join("")

return	fetch(`${api}${venueDetailsUrl}`)
		.then(res => res.json())
		.then(data => data.response.venue)
		//.catch(error => {console.log(`Error while Getting Venue Details `, error)})
}
