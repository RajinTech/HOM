import React, { Component } from 'react';
import { Link } from 'react-router';
import ListingTile from '../components/ListingTile'
import ScrollTile from '../components/ScrollTile'
import MapContainer from './MapContainer'


class ListingIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      listings_all: [],
      listings_holder: [],
      listings_show: []
    }
      this.onHoverEnterHandler = this.onHoverEnterHandler.bind(this)
      this.onHoverLeaveHandler = this.onHoverLeaveHandler.bind(this)
  }



  onHoverEnterHandler(event) {

  let listings_show = this.state.listings_show;
  let listings_holder = this.state.listings_holder;
  let listing_from_holder = listings_holder.splice(0, 1)[0];
  let listing_from_show = listings_show.splice(0, 1)[0];

  console.log("you hit it! ");
  console.log('OG listing_holder state:');
  console.log(listings_holder);
  console.log("OGlistings show state:");
  console.log(listings_show)

  this.setState({ listings_show: listings_show.push(listing_from_holder) })

  this.setState({ listings_holder: listings_holder.push(listing_from_show) })


  console.log("new listings holders state:");
  console.log(listings_holder);
  console.log("new listings show state:");
  console.log(listings_show)


  }
  onHoverLeaveHandler(event) {
  }

  componentDidMount() {
  fetch(`/api/v1/listings.json`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({ listings_all: responseData });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

}

  render(){
    this.state.listings_holder = this.state.listings_all.map((listing) => {
      return(
        listing
      )
    })

    this.state.listings_show = this.state.listings_holder.splice(1, 13);

    let listings_display = this.state.listings_show.map((listing) => {
      return (

        <ListingTile
          key={listing.id}
          bathrooms={listing.bathrooms}
          bedrooms={listing.bedrooms}
          city={listing.city}
          dateavailable={listing.date_available}
          id={listing.id}
          leaselength={listing.lease_length}
          rent={listing.rent}
          sqft={listing.sq_ft}
          state={listing.state}
          street={listing.street}
          unit={listing.unit}
          userid={listing.user_id}
          zip={listing.zip}
        />
      )
    })
    return(
        <div className="padding-for-index">
            <div className="listings-box">
              <div className="listing-text">
            <h2></h2>
          </div>
          {listings_display}

      </div>
      <div className="row">
        <div className="scroll-down"><a>O</a></div>

      <div className="map-box">

          <MapContainer className="center"/>
        </div>
      </div>
        </div>
    )
  }
}

export default ListingIndexContainer
// <div><ScrollTile
//   onHoverEnterHandler={this.onHoverEnterHandler}
//   onHoverLeaveHandler={this.onHoverLeaveHandler}
//   onClick={this.onHoverEnterHandler}
//   /></div>
