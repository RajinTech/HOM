import React, { Component } from 'react';
import { Link } from 'react-router';
import ListingTile from '../components/ListingTile'
import ScrollTile from '../components/ScrollTile'
import Map from '../components/Map'
import ImageTile from '../components/ImageTile'


class ListingIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings_all: [],
      listings_holder: [],
      listings_show: [],
      first_pictures:[]
    }
  }
//FETCH
  componentWillMount() {
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
      this.setState({ listings_all: responseData[0] });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let listings_display = this.state.listings_all.map((listing) => {
      return (
        <ListingTile
          key={listing.id}
          city={listing.city}
          id={listing.id}
          state={listing.state}
          street={listing.street}
          unit={listing.unit}
          userid={listing.user_id}
          pic={listing.zip}
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
      <div>
        <div>
            <div><h1>hi</h1></div>
            <Map
              listingsall={this.state.listings_all}
            />
            </div>
        </div>
      </div>
        </div>
    )
  }
}

export default ListingIndexContainer
