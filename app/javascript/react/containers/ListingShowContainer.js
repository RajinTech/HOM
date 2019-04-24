import ListingShow from '../components/ListingShowTile'
import AmenityTile from '../components/AmenitiesTile'
import MapShow from '../components/MapShow'
import Map from '../components/Map'
import React, { Component } from 'react';
import { Link } from 'react-router';

class ListingShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: [],
      amenities: {},
      features: {},
      pictures: [],
      showtile: {}
    }
    this.roledexforward = this.roledexforward.bind(this)
    this.roledexback = this.roledexback.bind(this)
    this.current_Pic = this.current_Pic.bind(this)
    this.now_1 = this.now_1.bind(this)
    this.now_2 = this.now_2.bind(this)
    this.now_3 = this.now_3.bind(this)
    this.now_4 = this.now_4.bind(this)
    this.now_5 = this.now_5.bind(this)
    this.now_6 = this.now_6.bind(this)
    this.now_7 = this.now_7.bind(this)
    this.now_8 = this.now_8.bind(this)
    this.now_9 = this.now_9.bind(this)
    this.now_10 = this.now_10.bind(this)
    this.now_11 = this.now_11.bind(this)
    this.now_12 = this.now_12.bind(this)
    this.now_13 = this.now_13.bind(this)
    this.now_14 = this.now_14.bind(this)
    this.now_15 = this.now_15.bind(this)
    this.now_13 = this.now_13.bind(this)
    this.now_14 = this.now_14.bind(this)
    this.now_15 = this.now_15.bind(this)
    this.now_16 = this.now_16.bind(this)
    this.now_17 = this.now_17.bind(this)
    this.now_18 = this.now_18.bind(this)
    this.now_19 = this.now_19.bind(this)
    this.now_20 = this.now_20.bind(this)
    this.now_21 = this.now_21.bind(this)
    this.now_22 = this.now_22.bind(this)
    this.now_23 = this.now_23.bind(this)
    this.now_24 = this.now_24.bind(this)
  }

  roledexforward(){
    let holder = this.state.pictures
    let pergatory = holder.pop()
    holder.unshift(pergatory)
    this.setState({ pictures: holder, showtile: holder[10].image})
  }

  roledexback(){
    let holder = this.state.pictures
    let pergatory = holder.shift()
    holder.push(pergatory)
    this.setState({ pictures: holder, showtile: holder[10].image})
 }

  current_Pic(position){
    let picture_gallery = this.state.pictures.map((picture) => {
      return(
        picture.image
        )
      })
      this.setState({ showtile: picture_gallery[position]})
    }

  now_0(){
    this.current_Pic(0)
  }

  now_1(){
    this.current_Pic(1)
  }

  now_2(){
    this.current_Pic(2)
  }

  now_3(){
    this.current_Pic(3)
  }

  now_4(){
    this.current_Pic(4)
  }

  now_5(){
    this.current_Pic(5)
  }

  now_6(){
    this.current_Pic(6)
  }

  now_7(){
    this.current_Pic(7)
  }

  now_8(){
    this.current_Pic(8)
  }

  now_9(){
    this.current_Pic(9)
  }

  now_10(){
    this.current_Pic(10)
  }

  now_11(){
    this.current_Pic(11)
  }

  now_12(){
    this.current_Pic(12)
  }

  now_13(){
    this.current_Pic(13)
  }

  now_14(){
    this.current_Pic(14)
  }

  now_15(){
    this.current_Pic(15)
  }

  now_16(){
    this.current_Pic(16)
  }

  now_17(){
    this.current_Pic(17)
  }

  now_18(){
    this.current_Pic(18)
  }

  now_19(){
    this.current_Pic(19)
  }

  now_20(){
    this.current_Pic(20)
  }

  now_21(){
    this.current_Pic(21)
  }

  now_22(){
    this.current_Pic(22)
  }

  now_23(){
    this.current_Pic(23)
  }

  now_24(){
    this.current_Pic(24)
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
        this.setState({ amenities: responseData.amenities, listing: responseData, features: responseData.features, pictures: responseData.pictures, showtile: responseData.pictures[0].image})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

render(){
  let listing = this.state.listing
  let picture_gallery = this.state.pictures.map((picture) => {
    return(
      <img className="picture" src={picture.image}>
      </img>
    )})

  return(
    <div className='main'>
          <div className='container'>
            <div className='left_half'>
              <div className='container'>

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
        </div>
          <Map
            listingsall={this.state.listing}
          />
        </div>
        <div className='right_half'>

          <div className='picture_gallery'>
            {picture_gallery}
          </div>
        </div>
      </div>

          </div>
          )
        }
      }

export default ListingShowContainer
