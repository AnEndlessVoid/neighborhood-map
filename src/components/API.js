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

/***********************Google Maps API*****************************************************/

/* Get Place Name using Google Maps API using Location Lat Lng*/
export const getPlaceIdByGeocoding = (latlng) => {
let geoCodeUrl =[`https://maps.googleapis.com/maps/api/geocode/json?`,
						`latlng=${latlng.lat},${latlng.lng}&language=en&`,
						`KEY=AIzaSyC8v53M-4E8CxXiqbvKVMxkSgdpfn2aiaw`].join("")

 return	fetch(geoCodeUrl)
		.then(res => res.json())
		.then(data => data)
		.catch(error => {
			console.log(error)
		});
}
/*Get Place Details using Google Maps API using place_id*/
export const getPlaceDetails = (place_id) => {

let placeDetailsUrl = [`https://maps.googleapis.com/maps/api/place/details/json?language=en`,
						`&placeid=${place_id}`,
						`&key=AIzaSyC8v53M-4E8CxXiqbvKVMxkSgdpfn2aiaw`].join("")

return	fetch(proxyurl + placeDetailsUrl)
		.then(res => res.json())
		.then(data => data.result)
		.catch(error => {
			console.log(error)})
	}

/*Get Place Photo using Photo Reference*/
export const getPlacePhoto = (photo_reference) => {
	let photoReferenceUrl = [`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400`,
							`&photoreference=${photo_reference}`,
							`&key=AIzaSyC8v53M-4E8CxXiqbvKVMxkSgdpfn2aiaw`].join("")
	return fetch(proxyurl+photoReferenceUrl)
			.then(res => res.blob())
			// .then(blobResponse => {
			// 	 blobResponse
			//  	//console.log(data)
			//  })
			.catch(error => {
				console.log('Error while getting Place Photo', error)
			})
}
