import React, { Component } from 'react';
import { Link } from 'react-router';
import ListingTile from '../components/ListingTile'
import MapContainer from './MapContainer'


class ListingIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    }
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
      this.setState({ listings: responseData });
      console.log(this.state);

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

}

  render(){
    let listings = this.state.listings.map((listing) => {
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
        <div className="column">
        {listings}
      <div className="row">
            <MapContainer/>
        </div>
        </div>
    )
  }
}

export default ListingIndexContainer
