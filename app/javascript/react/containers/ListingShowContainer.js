import React, { Component } from 'react';
import { Link } from 'react-router';
import ListingShow from '../components/ListingShowTile'
import GalleryTile from './LightBoxContainer'
import AmenityTile from '../components/AmenitiesTile'
import MapShow from '../components/MapShow'
import ImageTile from '../components/ImageTile'


class ListingShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: [],
      amenities: {},
      features: {},
      pictures: []
    }
    this.roledex = this.roledex.bind(this)
  }
   roledex(){
    let holder = this.state.pictures
    let pergatory = holder.pop()
    holder.unshift(pergatory)
    this.setState({ pictures: holder})
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

  console.log("pics");
  console.log(this.state.pictures);
  let picture_gallery = this.state.pictures.map((picture, n) => {
    return(


        <ImageTile
          key={picture.id}
          pic={picture.image}
          />

        )
      })
  let listing = this.state.listing

  return(
    <div >

<div className="image-container">

  </div>
       <div className="sidewinder-box">
        <div className="sidewinder d-10"></div>
        <div className="sidewinder d-9"></div>
        <div className="sidewinder d-8"></div>
        <div className="sidewinder d-7"></div>
        <div className="sidewinder d-6"></div>
        <div className="sidewinder d-5"></div>
        <div className="sidewinder d-4"></div>
        <div className="sidewinder d-3"></div>
        <div className="sidewinder d-2"></div>
        <div className="sidewinder d-1"></div>
        <div className="sidewinder d1"></div>
        <div className="sidewinder d2"></div>
        <div className="sidewinder d3"></div>
        <div className="sidewinder d4"></div>
        <div className="sidewinder d5"></div>
        <div className="sidewinder d6"></div>
        <div className="sidewinder d7"></div>
        <div className="sidewinder d8"></div>
        <div className="sidewinder d9"></div>
        <div className="sidewinder d10"></div>
        <div className="sidewinder d11"></div>
        <div className="sidewinder d12"></div>
        <div className="sidewinder d13"></div>
        <div className="sidewinder d14"></div>
        <div className="sidewinder d15"></div>



      </div>
      <div className="hexagon" onMouseMove={this.roledex}><button></button></div>
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
         schooldistrict={this.state.amenities.school_district}
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


       </div>
  )
}}

export default ListingShowContainer
