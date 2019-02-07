import React, { Component } from 'react';
import { Link } from 'react-router';
import MapContainer from './MapContainer'
import ListingTile from '../components/ListingTile'
import GalleryTile from './LightBoxContainer'
import AmenityTile from '../components/AmenitiesTile'

class ListingShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: [],
      listings: [],
      listing: []
    }
}

  componentDidMount() {

    fetch(`/api/v1/amenities/${this.props.params.id}`)
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
        this.setState({ amenities: responseData[0] });
        this.setState({ listing: responseData[1] });
        console.log(this.state.amenities.building_style);
        console.log(this.state.listing);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


render(){
  return(
    <div className="row">
      <h1>{this.state.amenities.building_style}</h1>
    <div className="small-12 column">
      <GalleryTile/>
    </div>
    <div className="small-12 column">
    <AmenityTile
        buildingstyle={this.state.amenities.building_style}
        heating={this.state.amenities.heating}
        cooling={this.state.amenities.cooling}
        hud={this.state.amenities.hud}
        pets={this.state.amenities.pets}
        schooldistrict={this.state.amenities.school_district}
        smoking={this.state.amenities.smoking}
        zoning={this.state.amenities.zoning}
    />
  </div>

  <div className="small-12 column">
    <div className="content-tile">
      <ListingTile
            key={this.state.listing.id}
            bathrooms={this.state.listing.bathrooms}
            bedrooms={this.state.listing.bedrooms}
            city={this.state.listing.city}
            dateavailable={this.state.listing.date_available}
            id={this.state.listing.id}
            leaselength={this.state.listing.lease_length}
            rent={this.state.listing.rent}
            sqft={this.state.listing.sq_ft}
            state={this.state.listing.state}
            street={this.state.listing.street}
            unit={this.state.listing.unit}
            userid={this.state.listing.user_id}
            zip={this.state.listing.zip}
          />
          </div>
        </div>
        <div>
          <MapContainer
          />
        </div>
  </div>
  )
}}

export default ListingShowContainer
