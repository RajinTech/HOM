import React, { Component } from 'react';
import { Link } from 'react-router';
import ListingTile from '../components/ListingTile'
import GalleryTile from './LightBoxContainer'
import AmenityTile from '../components/AmenitiesTile'
import Map from '../components/Map'


class ListingShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: []
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
        this.setState({ listing: responseData})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


render(){
  let listing_info = this.state.listing[0].map((listing) =>{
    return(
      <div>

      <Map
       key={listing.id}
       lat={listing.latitude}
       lon={listing.longitude}

     />
         <AmenityTile
           key={listing.id}
           building_style={listing.amenities.building_style}
           cooling={listing.amenities.cooling}
           heating={listing.amenities.heating}
           hud={listing.amenities.hud}
           parking_spaces={listing.amenities.parking_spaces}
           pets={listing.amenities.pets}
           school_district={listing.amenities.school_district}
           smoking={listing.amenities.smoking}
           zoning={listing.amenities.zoning}
         />

         <ListingTile
           key={listing.id}
           bathrooms={listing.features.bathrooms}
           bedrooms={listing.features.bedrooms}
           dateavailable={listing.features.date_available}
           id={listing.features.id}
           leaselength={listing.features.lease_length}
           rent={listing.features.rent}
           sqft={listing.features.sq_ft}
           street={listing.street}
           unit={listing.unit}
           city={listing.city}
           state={listing.state}
           zip={listing.zip}
             />
           </div>

    )
  })

  return(
        <div>
        <div className="flex-column picturestrip">
          <div className="image-box-show"><h5>imageshow</h5>
          </div>
        </div>
         {listing_info}

              </div>
  )
}}

export default ListingShowContainer
