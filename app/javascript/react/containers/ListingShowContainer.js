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
      edit: false
    }

    this.is_false = this.is_false.bind(this)
    this.editStart = this.editStart.bind(this)
    this.editStop = this.editStop.bind(this)
    this.editMode = this.editMode.bind(this)
  }

  is_false(s){
    if(s === false){
      return 'No'
    } else {
      return s
    }
  }

  editMode(form){
    if(this.state.edit == true){
      return(form)
    } else if(this.state.edit == false){
      return(
        <h3>edit</h3>
      )
    }
  }

  editStart(){
    this.setState({ edit: true })
  }

  editStop(){
    this.setState({ edit: false })
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
          edit: true })
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
  
  let listing_id = this.props.params.id
  let listing = this.state.listing
  let picture_gallery = this.state.pictures.map((picture) => {
    return(
      <div className='listing_show_container'>
        <div className='triangle_left_small'></div>
      <div className="picture">
          <img src={picture.image}></img>
        </div>
        <div className='triangle_right_small'></div>
      </div>
    )})

  return(
    <div className='main'>
          <div className='container'>

            <div className='left_half'>
              <div className='container'>
                <div className='listing_show_container'>

                  <div className='triangle_left'></div>

              <ListingShow
                key={listing.id}
                bath={this.state.features.bathrooms}
                bed={this.state.features.bedrooms}
                dateavailable={this.state.features.date_available}
                id={this.state.features.id}
                leaselength={this.state.features.lease_length}
                rent={this.state.features.rent}
                street={listing.street}
                unit={listing.unit}
                city={listing.city}
                state={listing.state}
                zip={listing.zip}
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
          </div>

            <div className='listing_show_container'>
              <div className='triangle_left'></div>
              <div className='picture_gallery'>
                {picture_gallery}
              </div>
              <div className='triangle_right'></div>
            </div>
        </div>

        <div className='right_half'>
          <MapShow
            listingsall={this.state.listing}
          />

        </div>
        {editForm}


      </div>
    </div>
          )
        }
      }

export default ListingShowContainer
