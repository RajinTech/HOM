import React, { Component } from 'react';
import { Link } from 'react-router';
import ListingShow from '../components/ListingShowTile'
import AmenityTile from '../components/AmenitiesTile'
import MapShow from '../components/MapShow'

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
        console.log(responseData.pictures);
        this.setState({ amenities: responseData.amenities, listing: responseData, features: responseData.features, pictures: responseData.pictures, showtile: responseData.pictures[0].image})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }


render(){
  let picture_gallery = this.state.pictures.map((picture) => {
    return(
      picture.image
    )
  })
  let listing = this.state.listing
  let view_window = this.state.viewer

  return(
  <div>
    <div className="image-container">
      </div>
           <div className="sidewinder-box">
             <div className="sidewinder"><img src={this.state.showtile}></img></div>
            <div className="sidewinder d-10" onClick={this.now_0}><img src={picture_gallery[0]}></img></div>
          <div className="sidewinder d-9" onClick={this.now_1}><img src={picture_gallery[1]}></img></div>
        <div className="sidewinder d-8" onClick={this.now_2}><img src={picture_gallery[2]}></img></div>
      <div className="sidewinder d-7" onClick={this.now_3}><img src={picture_gallery[3]}></img></div>
    <div className="sidewinder d-6" onClick={this.now_4}><img src={picture_gallery[4]}></img></div>
            <div className="sidewinder d-5" onClick={this.now_5}><img src={picture_gallery[5]}></img></div>
          <div className="sidewinder d-4" onClick={this.now_6}><img src={picture_gallery[6]}></img></div>
        <div className="sidewinder d-3" onClick={this.now_7}><img src={picture_gallery[7]}></img></div>
      <div className="sidewinder d-2" onClick={this.now_8}><img src={picture_gallery[8]}></img></div>
    <div className="sidewinder d-1" onClick={this.now_9}><img src={picture_gallery[9]}></img></div>
            <div className="sidewinder d1" onClick={this.now_10}><img src={picture_gallery[10]}></img></div>
          <div className="sidewinder d2" onClick={this.now_11}><img src={picture_gallery[11]}></img></div>
        <div className="sidewinder d3" onClick={this.now_12}><img src={picture_gallery[12]}></img></div>
      <div className="sidewinder d4" onClick={this.now_13}><img src={picture_gallery[13]}></img></div>
    <div className="sidewinder d5" onClick={this.now_14}><img src={picture_gallery[14]}></img></div>
            <div className="sidewinder d6" onClick={this.now_15}><img src={picture_gallery[15]}></img></div>
          <div className="sidewinder d7" onClick={this.now_16}><img src={picture_gallery[16]}></img></div>
        <div className="sidewinder d8" onClick={this.now_17}><img src={picture_gallery[17]}></img></div>
      <div className="sidewinder d9" onClick={this.now_18}><img src={picture_gallery[18]}></img></div>
    <div className="sidewinder d10" onClick={this.now_19}><img src={picture_gallery[19]}></img></div>
            <div className="sidewinder d11" onClick={this.now_20}><img src={picture_gallery[20]}></img></div>
          <div className="sidewinder d12" onClick={this.now_21}><img src={picture_gallery[21]}></img></div>
        <div className="sidewinder d13" onClick={this.now_22}><img src={picture_gallery[22]}></img></div>
      <div className="sidewinder d14" onClick={this.now_23}><img src={picture_gallery[23]}></img></div>
    <div className="sidewinder d15" onClick={this.now_24}><img src={picture_gallery[24]}></img></div>
      </div><div className="circle" onMouseMove={this.roledexforward}></div>
              <div className="rectangle" onClick={this.roledexforward}></div>
                <div className="rectangle2" onClick={this.roledexback}></div>

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
         <div className="spinme" onMouseMove={this.roledexforward}><h9 onMouseMove={this.roledexforward}>Roll me</h9></div>
          <div className="upme"><h9 onClick={this.roledexforward}>Up</h9></div>
            <div className="downme" ><h9 onClick={this.roledexback}>Down</h9></div>
          </div>
        )
      }
    }

export default ListingShowContainer
