import React, { Component } from 'react';
import { Link } from 'react-router';
import ListingShow from '../components/ListingShow'
import GalleryTile from './LightBoxContainer'
import AmenityTile from '../components/AmenitiesTile'
import MapShow from '../components/MapShow'


class ListingShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: [],
      amenities: {},
      features: {},
      pictures: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/listings/${this.props.params.id}`)
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
        this.setState({ amenities: responseData.amenities, listing: responseData, features: responseData.features, pictures: responseData.pictures})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


render(){
  let listing = this.state.listing

  return(
    <div>
    <div>
    <div className="flex-column picturestrip">
      <div className="image-box-show"><h5>imageshow</h5>
      </div>
    </div>
    <MapShow
     listingsall={this.state.listing}

    />
       <AmenityTile
         key={this.state.amenities.id + 1}
         buildingstyle={this.state.amenities.building_style}
         cooling={this.state.amenities.cooling}
         heating={this.state.amenities.heating}
         hud={this.state.amenities.hud}
         parkingspaces={this.state.amenities.parking_spaces}
         pets={this.state.amenities.pets}
         school_district={this.state.amenities.school_district}
         smoking={this.state.amenities.smoking}
         zoning={this.state.amenities.zoning}
       />

     <ListingShow
         key={listing.id}
         bath={this.state.features.bathrooms}
         bed={this.state.features.bedrooms}
         dateavailable={this.state.features.date_available}
         id={this.state.features.id}
         leaselength={this.state.features.lease_length}
         rent={this.state.features.rent}
         sqft={this.state.features.sq_ft}
         street={listing.street}
         unit={listing.unit}
         city={listing.city}
         state={listing.state}
         zip={listing.zip}
           />

  </div></div>

  )
}}

export default ListingShowContainer
