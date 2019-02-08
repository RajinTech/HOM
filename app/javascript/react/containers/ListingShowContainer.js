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
    <div className="row box-show">
       <div className="row">
        <div className="small-8 medium-8 large-8 column"><h5>blank1</h5>
        </div>
        <div className="small-8 medium-4 large-4 column console"><h1>console</h1>
        </div>
      </div>
      <div className="row">
        <div className="small-2 medium-2 large-2 column picturestrip">
          <div className="image-box-show"><h5>imageshow</h5>
            <img className="photo-box" src="https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.12.46+PM.png"></img>
          </div>
        </div>
        <div className="small-4 medium-4 column map-box-show">
          <div className="map-box"><h1>mapshow</h1><h1>mapshow</h1><h1>mapshow</h1><h1>mapshow</h1>
            <MapContainer
            />
          </div>
        </div>
          <div className="small-5 medium-8 column stats-show">
            <div className="row amenity-show"><h5>statsshow</h5>
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
            <div className="row listing-show"><h5>contenttile</h5>
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
        <div className="small-2 medium-2 large-2 column overhang"><h5>overhang</h5>
        </div>
      </div>
    </div>



  )
}}

export default ListingShowContainer
