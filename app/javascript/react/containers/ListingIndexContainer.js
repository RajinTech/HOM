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
      listings_show: [],
      first_pictures:[]
    }
    this.roledexforward = this.roledexforward.bind(this)
    this.roledexback = this.roledexback.bind(this)
    this.current_Pic = this.current_Pic.bind(this)
  }
  roledexforward(){
   let holder = this.state.listings_all
   let pergatory = holder.pop()
   holder.unshift(pergatory)
   this.setState({ listings_all: holder})
 }
 roledexback(){
  let holder = this.state.listings_all
  let pergatory = holder.shift()
  holder.push(pergatory)
  this.setState({ listings_all: holder})
}

 current_Pic(position){
   this.setState({ showtile: picture_gallery[position]})

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
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let listings_display = this.state.listings_all.slice(0, 13).map((listing) => {
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
        <div className="">
            <div className="listings-box">
              <div className="listing-text">
            <h2></h2>
          </div>
          {listings_display.reverse()}
      </div>
      <div className="row">
      <div>
        <div>
            <Map
              listingsall={this.state.listings_all}
            />
            </div>
        </div>
      </div>
      <h6 className="glide">Hover to reveal listing Click to View Details</h6>
      <div className="triangle-up" onClick={this.roledexforward}><h5></h5></div>
      <div className="triangle-down" onClick={this.roledexback}><h5></h5></div>
      <div className="circle2" onClick={this.roledexforward}><h5></h5></div>
      <div className="circle3" onClick={this.roledexback}><h5></h5></div>
      <div className="circle4" onClick={this.roledexback}><h5></h5></div>
      <div className="circle5" onMouseMove={this.roledexforward}><h5></h5></div>
        <div className="spinme2"><h9>Spin me</h9></div>
        <div className="upme"><h9 onClick={this.roledexforward}>Up</h9></div>
        <div className="downme" ><h9 onClick={this.roledexback}>Down</h9></div>

        </div>
    )
  }
}

export default ListingIndexContainer
