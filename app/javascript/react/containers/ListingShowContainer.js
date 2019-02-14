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

  let picture_gallery = this.state.pictures.map((picture) => {
    return( picture.image
        )
      })
  let listing = this.state.listing

  return(
    <div >

<div className="image-container">

  </div>
       <div className="sidewinder-box">
        <div className="sidewinder d-10"><img src={picture_gallery[0]}></img></div>
      <div className="sidewinder d-9"><img src={picture_gallery[1]}></img></div>
    <div className="sidewinder d-8"><img src={picture_gallery[2]}></img></div>
  <div className="sidewinder d-7"><img src={picture_gallery[3]}></img></div>
<div className="sidewinder d-6"><img src={picture_gallery[4]}></img></div>
        <div className="sidewinder d-5"><img src={picture_gallery[5]}></img></div>
      <div className="sidewinder d-4"><img src={picture_gallery[6]}></img></div>
    <div className="sidewinder d-3"><img src={picture_gallery[7]}></img></div>
  <div className="sidewinder d-2"><img src={picture_gallery[8]}></img></div>
<div className="sidewinder d-1"><img src={picture_gallery[9]}></img></div>
        <div className="sidewinder d1"><img src={picture_gallery[10]}></img></div>
      <div className="sidewinder d2"><img src={picture_gallery[11]}></img></div>
    <div className="sidewinder d3"><img src={picture_gallery[12]}></img></div>
  <div className="sidewinder d4"><img src={picture_gallery[13]}></img></div>
<div className="sidewinder d5"><img src={picture_gallery[14]}></img></div>
        <div className="sidewinder d6"><img src={picture_gallery[15]}></img></div>
      <div className="sidewinder d7"><img src={picture_gallery[16]}></img></div>
    <div className="sidewinder d8"><img src={picture_gallery[17]}></img></div>
  <div className="sidewinder d9"><img src={picture_gallery[18]}></img></div>
<div className="sidewinder d10"><img src={picture_gallery[19]}></img></div>
        <div className="sidewinder d11"><img src={picture_gallery[20]}></img></div>
      <div className="sidewinder d12"><img src={picture_gallery[21]}></img></div>
    <div className="sidewinder d13"><img src={picture_gallery[22]}></img></div>
  <div className="sidewinder d14"><img src={picture_gallery[23]}></img></div>
<div className="sidewinder d15"><img src={picture_gallery[24]}></img></div>



      </div>
      <div className="hexagon" onMouseMove={this.roledex}></div>
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
