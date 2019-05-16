import ListingTile from '../components/ListingTile'
import React, { Component } from 'react';
import { Link } from 'react-router';
import Map from '../components/Map'


class ListingIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings_all: [],
      listings_show: [],
      first_pictures:[]
    }

  }

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
      this.setState({ listings_all: responseData });
      console.log(responseData);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let listings_display = this.state.listings_all.map((listing) => {

      return (
          <ListingTile
            key={listing.id}
            id={listing.id}
            city={listing.city}
            state={listing.state}
            street={listing.street}
            unit={listing.unit}
            zip={listing.zip}
            bed={listing.features.bedrooms}
            bath={listing.features.bathrooms}
            sqft={listing.features.sq_ft}
            rent={listing.features.rent}
            pic={listing.pictures}
          />
      )
    })
    return(
      <div className='main'>

      <img className='rentals_logo' src='https://s3.amazonaws.com/hom-development/rentals_logo.png'></img>
      <div className='vertical_container'>

            <div className='triangle_top'></div>
              <div className="listing_container">
               {listings_display.reverse()}
             </div>
           <div className='triangle_bottom'></div>

           <Map
             listingsall={this.state.listings_all}
             />
         </div>
      </div>
  )}
}

export default ListingIndexContainer
