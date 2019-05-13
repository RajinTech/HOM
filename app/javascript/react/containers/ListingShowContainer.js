import ListingShow from '../components/ListingShowTile'
import MapShow from '../components/MapShow'
import ListingEditContainer from './ListingEditContainer'
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
      showtile: {},
      edit: true,
      active: true,


      street: "",
      unit: "",
      city: "",
      state: "",
      zip: "",
      bedrooms: "",
      bathrooms: "",
      rent: "",
      sq_ft: "",
      date_available: "",
      lease_length: "",
      building_style: "",
      parking_spaces: "",
      pets: "",
      zoning: "",
      school_district: "",
      heating: "",
      cooling: "",
      hud: "",
      smoking: "",
      image: [],
      error: false,
      submit_message: "",
      field_message: "",

    }
    this.is_false = this.is_false.bind(this)
    this.editMode = this.editMode.bind(this)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
        active: !this.state.active
    });
}

  is_false(s){
    if(s === false){
      return 'No'
    } else {
      return s
    }
  }

  editMode(){
    if(this.state.active == true){
      return(
        <ListingEditContainer
          listing={this.state.listing}
          amenities={this.state.amenities}
          features={this.state.features}
          pictures={this.state.showtile}
          id={this.props.params.id}
          />
      )
    } else if(this.state.active == false){
      return(
          <h1>edit</h1>
      )
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
        this.setState({
          amenities: responseData.amenities,
          listing: responseData,
          features: responseData.features,
          pictures: responseData.pictures,
          showtile: responseData.pictures[0].image,
          edit: false,
          active: false

           })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

render(){

  let editForm = this.editMode(
    <ListingEditContainer
      listing={this.state.listing}
      amenities={this.state.amenities}
      features={this.state.features}
      pictures={this.state.showtile}
      id={this.props.params.id}
      />
  )

  let picture_gallery = this.state.pictures.map((picture) => {
    return(
      <div className='horizontal_container'>
        <div className='triangle_left_small'></div>
          <div className="bordered_listing_photo">
          <img src={picture.image}></img>
        </div>
        <div className='triangle_right_small'></div>
      </div>
    )})

  return(
    <div className='main'>
      <div className='vertical_container'>


        <div className='horizontal_container'>
          <div className='triangle_left'></div>
            <ListingShow
              key={this.state.listing.id}
              bath={this.state.features.bathrooms}
              bed={this.state.features.bedrooms}
              dateavailable={this.state.features.date_available}
              id={this.state.features.id}
              leaselength={this.state.features.lease_length}
              rent={this.state.features.rent}
              street={this.state.listing.street}
              unit={this.state.listing.unit}
              city={this.state.listing.city}
              state={this.state.listing.state}
              zip={this.state.listing.zip}
              heating={this.state.amenities.heating}
              cooling={this.state.amenities.cooling}
              parkingspaces={this.state.amenities.parking_spaces}
              buildingstyle={this.state.amenities.building_style}
              sqft={this.state.features.sq_ft}
              schooldistrict={this.state.amenities.school_district}
              smoking={this.is_false(this.state.amenities.smoking)}
              pets={this.is_false(this.state.amenities.pets)}
              hud={this.is_false(this.state.amenities.hud)}
            />
          <div className='triangle_right'></div>
        </div>

        <div className='horizontal_container'>
          <div className='triangle_left'></div>
            <div className='picture_gallery'>
            {picture_gallery}
            </div>
          <div className='triangle_right'></div>
        </div>

        <MapShow
          listingsall={this.state.listing}
        />



      </div>
    </div>
    )
  }
}

export default ListingShowContainer
