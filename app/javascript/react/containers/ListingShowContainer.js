import ListingEditContainer from './ListingEditContainer'
import RadioFieldBool from '../components/RadioFieldBool'
import ListingShow from '../components/ListingShowTile'
import ListingImage from '../components/ListingImage'
import RangeField from '../components/RangeField';
import RadioField from '../components/RadioField'
import DateField from '../components/DateField';
import ImageTile from '../components/ImageTile';
import TextTile from '../components/TextTile';
import PictureViewer from '../components/PictureViewer';
import { browserHistory } from 'react-router'
import MapShow from '../components/MapShow'
import React, { Component } from 'react';
import { Link } from 'react-router';
import Map from '../components/Map'

class ListingShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: [],
      amenities: {},
      features: {},
      pictures: [],
      active: false,

      street: "",
      unit: "",
      city: "",
      state: "",
      zip: "",
      id: "",
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
      role:"",
      current_pic:"https://images.freeimages.com/images/large-previews/a0c/daffodil-1378489.jpg"

    }
    this.is_false = this.is_false.bind(this)
    this.editMode = this.editMode.bind(this)
    this.viewMode = this.viewMode.bind(this)
    this.enterViewMode = this.enterViewMode.bind(this)
    this.exitViewMode = this.exitViewMode.bind(this)
    this.toggleViewMode = this.toggleViewMode.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteListing = this.deleteListing.bind(this)
    this.validationError = this.validationError.bind(this)
    this.validateSubmit = this.validateSubmit.bind(this)
  }

  handleChange(event) {
    if(event.target.value == ""){
      this.setState({ [event.target.name.error]: "Cannot be blank" })
    } else if (event.target.value !== "") {
      this.setState({ [event.target.name.error]: "" })
    }
  this.setState({
    [event.target.name]: event.target.value,
    submit_message: "",
  })
}
  validationError(field) {
    if (field === "") {
      return (
        <h6> field cannot be blank</h6>
      )
    }
  }

  validateSubmit() {
    if(this.state.role !== 'admin'){
      this.setState({
        submit_message: "Must log in as admin to alter listing",
        error: true })
      }
    }

  toggleEditMode(event) {
    this.setState({
        active: !this.state.active
    });
  }
  enterViewMode(image){
    event.preventDefault();
        this.setState({ current_pic: image })
  }

  exitViewMode(){
    this.setState({ current_pic: ""})
  }

  toggleViewMode(image) {
    event.preventDefault();
    if(this.state.current_pic !== ""){
      this.setState({ current_pic: "" })
    } else if (this.state.current_pic == "") {
      this.setState({ current_pic: image  })
    }
  }

  is_false(s){
    if(s === false){
      return 'No'
    } else {
      return s
    }
  }
  viewMode(e){
    if(this.state.current_pic){
      return(e)
    }
  }
  editMode(form){
    if(this.state.active == true){
      return(
        <div className='vertical_container'>
          <button className='button animate_entrance' onClick={this.toggleEditMode}>Exit Edit Mode</button>
          <div className='animate_dropdown'>
            {form}
          </div>
        </div>
      )
    } else if(this.state.active == false && this.state.role == 'admin'){
      return(
        <div className='vertical_container'>
          <button className='button' onClick={this.toggleEditMode}>edit</button>
        </div>
      )
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.validateSubmit();
    let formPayload = this.state;
    fetch(`/api/v1/listings/${this.state.id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {

          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        browserHistory.push(`/listings`);
      })
      .catch(error =>
        {
        console.error(`Error in fetch: ${error.message}`),
            this.setState({ submit_message: 'Must be logged in as an admin to edit a listing' })

    });
  }

  deleteListing() {
  fetch(`/api/v1/listings/${this.state.id}`, {
    'method': 'DELETE',
    'headers': {
      'Accept': 'application/json',
      'Content-Type': "application/json"
    },
    'body': JSON.stringify({
      'listing': { 'id': this.props.id }
    })
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      if (body['successful']) {
        browserHistory.push(`/listings`);
      }
    })
    .catch(error => {

      console.error(`Error in fetch: ${error.message}`),
      this.setState({ submit_message: 'Must be logged in as an admin to delete a listing'})
    }
  );
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

          street: responseData.street,
          city: responseData.city,
          unit: responseData.unit,
          state: responseData.state,
          zip: responseData.zip,
          id: responseData.id,
          latitude: responseData.latitude,
          longitude: responseData.longitude,

          bedrooms: responseData.features.bedrooms,
          bathrooms: responseData.features.bathrooms,
          rent: responseData.features.rent,
          sq_ft: responseData.features.sq_ft,
          date_available: responseData.features.date_available,
          lease_length: responseData.features.lease_length,

          building_style: responseData.amenities.building_style,
          parking_spaces: responseData.amenities.parking_spaces,
          pets: responseData.amenities.pets,
          zoning: responseData.amenities.zoning,
          school_district: responseData.amenities.school_district,
          heating: responseData.amenities.heating,
          cooling: responseData.amenities.cooling,
          hud: responseData.amenities.hud,
          smoking: responseData.amenities.smoking,
          image: [],

          pictures: responseData.pictures,

          role: responseData.role,
           })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

render(){
  let picture_gallery = this.state.pictures.map((picture, index) => {
    return(
      <ListingImage
        key={index}
        src={picture.image}
        onClick={() => this.enterViewMode(this.state.pictures[index].image)}
        id={picture.id}/>

    )})
  let pictureViewer = this.viewMode(
    <div>
    <PictureViewer
      image={this.state.current_pic}
      />
    <button
      onClick={this.exitViewMode}
      className='zoomed_exit buttons'> Close </button>
    </div>
  )


  let editPage = this.editMode(
            <ListingEditContainer
              id={this.state.id}
              street={this.state.street}
              unit={this.state.unit}
              />
  )



  return(
    <div className='main'>
      <div className='vertical_container'>


        <div className='vertical_container'>
          <div className='triangle_top'></div>
            <ListingShow
              key={this.state.id}
              bath={this.state.bathrooms}
              bed={this.state.bedrooms}
              dateavailable={this.state.date_available}
              id={this.state.id}
              leaselength={this.state.lease_length}
              rent={this.state.rent}
              street={this.state.street}
              unit={this.state.unit}
              city={this.state.city}
              state={this.state.state}
              zip={this.state.zip}
              heating={this.state.heating}
              cooling={this.state.cooling}
              parkingspaces={this.state.parking_spaces}
              buildingstyle={this.state.building_style}
              sqft={this.state.features.sq_ft}
              schooldistrict={this.state.school_district}
              smoking={this.is_false(this.state.smoking)}
              pets={this.is_false(this.state.pets)}
              hud={this.is_false(this.state.hud)}
            />
          <div className='triangle_bottom'></div>
        </div>

        <div className='vertical_container'>
          <div className='triangle_top'></div>
            <div className='picture_gallery'>
            {picture_gallery}
            </div>
          <div className='triangle_bottom'></div>
        </div>
        {pictureViewer}

        <MapShow
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          id={this.state.id}
          street={this.state.street}
        />
      <div className='edit_container'>
      {editPage}
    </div>

      </div>
    </div>
    )
  }
}

export default ListingShowContainer
