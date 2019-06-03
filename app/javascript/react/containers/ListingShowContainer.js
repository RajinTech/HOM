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
      current_pic:"",
      current_pic_index:"",

    }
    this.is_false = this.is_false.bind(this)
    this.editMode = this.editMode.bind(this)
    this.viewMode = this.viewMode.bind(this)
    this.enterViewMode = this.enterViewMode.bind(this)
    this.exitViewMode = this.exitViewMode.bind(this)
    this.toggleViewMode = this.toggleViewMode.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
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

  toggleViewMode(image, index) {
    event.preventDefault();
    if(this.state.current_pic !== ""){
      this.setState({ current_pic: "", current_pic_index: index })
      console.log(this.state.current_pic_index);

    } else if (this.state.current_pic == "") {
      this.setState({ current_pic: image, current_pic_index: index  })
      console.log(this.state.current_pic_index);
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
  previousImage(){
    if(this.state.current_pic_index == 0){
      let previousIndex = this.state.pictures.length - 1
      this.setState({current_pic: this.state.pictures.slice(-1)[0].image, current_pic_index: previousIndex})
    } else{
      let previousIndex = this.state.current_pic_index - 1
      this.setState({current_pic: this.state.pictures[previousIndex].image, current_pic_index: previousIndex})
    }
  }
  nextImage(){
    if(this.state.current_pic == this.state.pictures.slice(-1)[0].image){
      let previousIndex = 0
      this.setState({current_pic: this.state.pictures[previousIndex].image, current_pic_index: previousIndex})
    } else{
      let previousIndex = this.state.current_pic_index + 1
      this.setState({current_pic: this.state.pictures[previousIndex].image, current_pic_index: previousIndex})
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
        onClick={() => this.toggleViewMode(this.state.pictures[index].image, index)}
        id={picture.id}/>

    )})


  let editPage = this.editMode(
            <ListingEditContainer
              id={this.state.id}
              street={this.state.street}
              unit={this.state.unit}
              city={this.state.city}
              state={this.state.state}
              zip={this.state.zip}
              bedrooms={this.state.bedrooms}
              bathrooms={this.state.bathrooms}
              rent={this.state.rent}
              sqft={this.state.sq_ft}
              dateavailable={this.state.date_available}
              leaselength={this.state.lease_length}
              buildingstyle={this.state.building_style}
              parkingspaces={this.state.parking_spaces}
              pets={this.state.pets}
              zoning={this.state.zoning}
              schooldistrict={this.state.school_district}
              heating={this.state.heating}
              cooling={this.state.cooling}
              hud={this.state.hud}
              smoking={this.state.smoking}
              id={this.state.id}
              />
          )

  return(
    <div className='main'>
      <div className='vertical_container'>
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

        <div className='vertical_container'>
          <div className='triangle_top'></div>
            <div className='picture_gallery'>
            {picture_gallery}
            </div>
          <div className='triangle_bottom'></div>
        </div>

        <PictureViewer
          src={this.state.current_pic}
          onClick={this.toggleViewMode}
          onClickNextImage={this.nextImage}
          onClickPreviousImage={this.previousImage}
          />

        <MapShow
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          id={this.state.id}
          street={this.state.street}
        />

        {editPage}

      </div>
    </div>
    )
  }
}

export default ListingShowContainer
