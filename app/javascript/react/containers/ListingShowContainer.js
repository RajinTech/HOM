import ListingEditContainer from './ListingEditContainer'
import RadioFieldBool from '../components/RadioFieldBool'
import ListingShow from '../components/ListingShowTile'
import RangeField from '../components/RangeField';
import RadioField from '../components/RadioField'
import DateField from '../components/DateField';
import ImageTile from '../components/ImageTile';
import TextTile from '../components/TextTile';
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
      showtile: {},
      edit: true,
      active: true,

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

    }
    this.is_false = this.is_false.bind(this)
    this.editMode = this.editMode.bind(this)
    this.handleClick = this.handleClick.bind(this);
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
      this.setState({
        submit_message: "Must log in as admin to alter listing",
        error: true })
  }

  handleSubmit(event){
    event.preventDefault();
    this.validateSubmit();
    let formPayload = this.state;
    fetch(`/api/v1/listings/${this.props.id}`, {
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

          street: responseData.street,
          city: responseData.city,
          unit: responseData.unit,
          state: responseData.state,
          zip: responseData.zip,
          id: responseData.id,

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
          image: [responseData.amenities.building_style],

          edit: false,
          active: false

           })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

render(){


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






































        <div>
        <div className="row">
          <div className="row"></div>
        <div>
          <h1>Edit Listing</h1>
        </div>
        <form onSubmit={this.handleSubmit} className="">
          <fieldset><legend>Location</legend>
            <div className="row">
              <div className="small-8 columns">
                <div>
                <TextTile
                  label="Street"
                  name="street"
                  onChange={this.handleChange}
                  value={this.state.street}
                  placeholder={this.state.street}
                />
              </div>
              {this.validationError(this.state.street)}
            </div>
            <div className="small-4 columns">
              <div>
                <TextTile
                  label="Unit"
                  name="unit"
                  onChange={this.handleChange}
                  value={this.state.unit}
                  placeholder={this.state.unit}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="small-4 columns">
              <div>
                <TextTile
                  label="City"
                  name="city"
                  onChange={this.handleChange}
                  value={this.state.city}
                  placeholder={this.state.city}
                />
              </div>
              {this.validationError(this.state.city)}
            </div>
            <div className="small-4 columns">
              <div>
                <TextTile
                  label="State"
                  name="state"
                  onChange={this.handleChange}
                  value={this.state.state}
                  placeholder={this.state.state}
                />
              </div>
              {this.validationError(this.state.state)}
            </div>
            <div className="small-4 columns">
              <div>
                <TextTile
                  label="Zip"
                  name="zip"
                  onChange={this.handleChange}
                  value={this.state.zip}
                  placeholder={this.state.zip}
                />
              </div>
              {this.validationError(this.state.zip)}
            </div>
          </div>
        </fieldset>
        <fieldset><legend>Features</legend>
          <div className="row">
            <div className="small-4 columns">
              <div>
                <TextTile
                  label="Rent"
                  name="rent"
                  onChange={this.handleChange}
                  value={this.state.rent}
                  placeholder={this.state.rent}
                />
              </div>
              {this.validationError(this.state.rent)}
            </div>
            <div className="small-4 columns">
              <div>
                <TextTile
                  label="Sqft"
                  name="sq_ft"
                  onChange={this.handleChange}
                  value={this.state.sq_ft}
                  placeholder={this.state.sq_ft}
                />
              </div>
              {this.validationError(this.state.sq_ft)}
            </div>
            <div className="small-4 columns">
              <div>
                <DateField
                  label="Date Available"
                  name="date_available"
                  onChange={this.handleChange}
                  value={this.state.date_available}
                  placeholder={this.state.date_available}
                />
              </div>
              {this.validationError(this.state.date_available)}
            </div>
          </div>
          <div className="row">
            <div className="small-4 columns ">
              <RangeField
                label="Bedrooms"
                name="bedrooms"
                onChange={this.handleChange}
                value={this.state.bedrooms}
                max="5"
              />
              <div>
                <h5 className="slider-name" >{this.state.bedrooms} Bedrooms</h5>
              </div>
            </div>
            <div className="small-4 columns">
              <div>
                <RangeField
                  label="Bathrooms"
                  name="bathrooms"
                  onChange={this.handleChange}
                  value={this.state.bathrooms}
                  max="5"
                />
                <div>
                  <h5 className="slider-name" >{this.state.bathrooms}  Bathrooms</h5>
                </div>
              </div>
            </div>
            <div className="small-4 columns">
              <div>
                <RangeField
                  label="Lease Length"
                  name="lease_length"
                  onChange={this.handleChange}
                  value={this.state.lease_length}
                  max="12"
                  />
                  <div>
                    <h5 className="slider-name" >{this.state.lease_length} Months</h5>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
            <fieldset><legend>Housing Restrictions</legend>
              <div className="small-4 columns">
                <div>
                  <RadioFieldBool
                    label="Hud"
                    name="hud"
                    onChange={this.handleChange}
                    value={this.state.hud}
                    placeholder={this.state.hud}
                  />
                </div>
              </div>
              <div className="small-4 columns">
                <div>
                  <RadioFieldBool
                    label="Smoking"
                    name="smoking"
                    onChange={this.handleChange}
                    value={this.state.smoking}
                    />
                  </div>
                </div>
              <div className="small-4 columns">
                <div>
                  <RadioFieldBool
                    label="Pets"
                    name="pets"
                    onChange={this.handleChange}
                    value={this.state.pets}
                  />
                </div>
              </div>
              </fieldset>
              <fieldset><legend>Building Specs</legend>
              <div className="small-4 columns">
                <RadioField
                  label="Zoning"
                  name="zoning"
                  option1="Comercial"
                  option2="Residential"
                  onChange={this.handleChange}
                  value={this.state.zoning}
                />
              </div>
                <div className="small-4 columns">
                  <div>
                    <RadioField
                      label="Building Style"
                      name="building_style"
                      option1="House"
                      option2="Duplex"
                      onChange={this.handleChange}
                      value={this.state.building_style}
                    />
                    {this.validationError(this.state.building_style)}
                  </div>
                </div>
                <div className="small-4 columns">
                  <div>
                    <RadioField
                      label="Parking Spaces"
                      name="parking_spaces"
                      option1="1"
                      option2="2"
                      onChange={this.handleChange}
                      value={this.state.parking_spaces}
                    />
                    {this.validationError(this.state.parking_spaces)}
                  </div>
                </div>
              </fieldset>
              <fieldset><legend>Living Specs</legend>
                <div className="small-4 columns">
                  <div>
                    <TextTile
                      label="School District"
                      name="school_district"
                      onChange={this.handleChange}
                      value={this.state.school_district}
                      placeholder={this.state.school_district}
                    />
                  </div>
                </div>
                <div className="small-4 columns">
                  <RadioField
                    label="Cooling"
                    name="cooling"
                    option1="Central Air"
                    option2="None"
                    onChange={this.handleChange}
                    value={this.state.cooling}
                  />
                </div>
                <div className="small-4 columns">
                  <div>
                    <RadioField
                      label="Heating"
                      name="heating"
                      option1="Gas"
                      option2="Oil"
                      onChange={this.handleChange}
                      value={this.state.heating}
                      />
                    </div>
                  </div>
              </fieldset>
              <fieldset><legend>Images</legend>
              <div className="small-4 columns">
                <div>
                  <TextTile
                    label="Image URL"
                    name="image"
                    onChange={this.handleChange}
                    value={this.state.image}
                    placeholder={this.state.image}
                  />
                </div>
              </div>

            <div>
              <h5 className="slider-name" >{this.state.image} Your Image</h5>
            </div>
              </fieldset>
              <h6>{this.state.submit_message}</h6>

        <div className='horizontal_container'>
          <input className="button" type="submit" value="Save"/>
          <button
            onClick={this.deleteListing}
            className='button'
            > Delete </button>
          </div>
        </form>
      </div>
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
