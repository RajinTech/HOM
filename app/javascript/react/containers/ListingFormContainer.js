import RadioFieldBool from '../components/RadioFieldBool'
import RangeField from '../components/RangeField';
import RadioField from '../components/RadioField'
import DateField from '../components/DateField';
import TextTile from '../components/TextTile';
import ImageTile from '../components/ImageTile';
import { browserHistory } from 'react-router'
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class ListingFormContainer extends Component {
  constructor(props) {
    super(props);
    this.onDrop = (files) => {
      this.setState({files})
    };
    this.state = {
      street: "123 Main St",
      unit: "",
      city: "Oneonta",
      state: "NY",
      zip: "13820",
      bedrooms: "3",
      bathrooms: "2",
      rent: "1000",
      sq_ft: "1000",
      date_available: "2019-02-01",
      lease_length: "12",
      building_style: "Duplex",
      parking_spaces: "2",
      pets: false,
      zoning: "Residential",
      school_district: "",
      heating: "Gas",
      cooling: "Central Air",
      hud: false,
      smoking: false,
      files: [],
      message: '',
    }

    this.handleStreetChange = this.handleStreetChange.bind(this)
    this.handleUnitChange = this.handleUnitChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleZipChange = this.handleZipChange.bind(this)
    this.handleBedroomChange = this.handleBedroomChange.bind(this)
    this.handleBathroomChange = this.handleBathroomChange.bind(this)
    this.handleRentChange = this.handleRentChange.bind(this)
    this.handleSqFtChange = this.handleSqFtChange.bind(this)
    this.handleDateAvailableChange = this.handleDateAvailableChange.bind(this)
    this.handleLeaseLengthChange = this.handleLeaseLengthChange.bind(this)
    this.handleBuildingStyleChange = this.handleBuildingStyleChange.bind(this)
    this.handleParkingSpacesChange = this.handleParkingSpacesChange.bind(this)
    this.handlePetsChange = this.handlePetsChange.bind(this)
    this.handleZoningChange = this.handleZoningChange.bind(this)
    this.handleSchoolDistrictChange = this.handleSchoolDistrictChange.bind(this)
    this.handleHeatingChange = this.handleHeatingChange.bind(this)
    this.handleCoolingChange = this.handleCoolingChange.bind(this)
    this.handleHudChange = this.handleHudChange.bind(this)
    this.handleSmokingChange = this.handleSmokingChange.bind(this)



    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleStreetChange(event) {
    let newStreet = event.target.value
    this.setState({ street: newStreet })
  }

  handleUnitChange(event) {
    let newUnit = event.target.value
    this.setState({ unit: newUnit })
  }

  handleCityChange(event) {
    let newCity = event.target.value
    this.setState({ city: newCity })
  }

  handleStateChange(event) {
    let newState = event.target.value
    this.setState({ state: newState })
  }

  handleZipChange(event) {
    let newZip = event.target.value
    this.setState({ zip: newZip })
  }
  handleBedroomChange(event) {
    let newBedroom = event.target.value
    this.setState({ bedrooms: newBedroom })
  }

  handleBathroomChange(event) {
    let newBathroom = event.target.value
    this.setState({ bathrooms: newBathroom })
  }

  handleRentChange(event) {
    let newRent = event.target.value
    this.setState({ rent: newRent })
  }

  handleSqFtChange(event) {
    let newSqFt = event.target.value
    this.setState({ sq_ft: newSqFt })
  }

  handleDateAvailableChange(event) {
    let newDateAvailable = event.target.value
    this.setState({date_available: newDateAvailable})
  }

  handleLeaseLengthChange(event) {
    let newLeaseLength = event.target.value
    this.setState({ lease_length: newLeaseLength })
  }

  handleBuildingStyleChange(event) {
    let newBuildingStyle = event.target.value
    this.setState({ building_style: newBuildingStyle })
  }

  handleParkingSpacesChange(event) {
    let newParkingSpaces = event.target.value
    this.setState({ parking_spaces: newParkingSpaces })
  }

  handlePetsChange(event) {
    let newPets = event.target.value
    this.setState({ pets: newPets })
  }

  handleZoningChange(event) {
    let newZoning = event.target.value
    this.setState({ zoning: newZoning })
  }

  handleSchoolDistrictChange(event) {
    let newSchoolDistrict = event.target.value
    this.setState({ school_district: newSchoolDistrict })
  }

  handleHeatingChange(event) {
    let newHeating = event.target.value
    this.setState({ heating: newHeating })
  }

  handleCoolingChange(event) {
    let newCooling = event.target.value
    this.setState({ cooling: newCooling })
  }

  handleHudChange(event) {
    let newHud = event.target.value
    this.setState({ hud: newHud })
  }

  handleSmokingChange(event) {
    let newSmoking = event.target.value
    this.setState({ smoking: newSmoking })
  }



  handleSubmit(event){
    event.preventDefault();

    console.log("handsubmit_fire");
    console.log(this.state);

    let body = new FormData()
    body.append('street', this.state.street)
    body.append('unit', this.state.unit)
    body.append('city', this.state.city)
    body.append('state', this.state.state)
    body.append('zip', this.state.zip)
    body.append('bedrooms', this.state.bedrooms)
    body.append('bathrooms', this.state.bathrooms)
    body.append('rent', this.state.rent)
    body.append('sq_ft', this.state.sq_ft)
    body.append('date_available', this.state.date_available)
    body.append('lease_length', this.state.lease_length)
    body.append('building_style', this.state.building_style)
    body.append('parking_spaces', this.state.parking_spaces)
    body.append('pets', this.state.pets)
    body.append('zoning', this.state.zoning)
    body.append('school_district', this.state.school_district)
    body.append('heating', this.state.heating)
    body.append('cooling', this.state.cooling)
    body.append('hud', this.state.hud)
    body.append('smoking', this.state.smoking)
    body.append('image', this.state.files[0])

    fetch('/api/v1/listings', {
      credentials: 'same-origin',
      method: 'POST',
      body: body
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
        this.setState({ message: body.message })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    const files = this.state.files.map(file => (
  <li key={file.name}>
    {file.name} - {file.size} bytes
  </li>
));

console.log(this.state);
    return(
      <div>
      <div className="row">
        <div className="row"></div>
      <div><h1>Add a New Listing</h1></div>
      <form onSubmit={this.handleSubmit}>
        <fieldset><legend>Location</legend>
          <div className="row">
            <div className="small-8 columns">
              <div>
              <TextTile
                label="Street"
                name="street"
                onChange={this.handleStreetChange}
                value={this.state.street}
              />
            </div>
          </div>
          <div className="small-4 columns">
            <div>
              <TextTile
                label="Unit"
                name="unit"
                onChange={this.handleUnitChange}
                value={this.state.unit}
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
                onChange={this.handleCityChange}
                value={this.state.city}
              />
            </div>
          </div>
          <div className="small-4 columns">
            <div>
              <TextTile
                label="State"
                name="state"
                onChange={this.handleStateChange}
                value={this.state.state}
              />
            </div>
          </div>
          <div className="small-4 columns">
            <div>
              <TextTile
                label="Zip"
                name="zip"
                onChange={this.handleZipChange}
                value={this.state.zip}
              />
            </div>
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
                onChange={this.handleRentChange}
                value={this.state.rent}
              />
            </div>
          </div>
          <div className="small-4 columns">
            <div>
              <TextTile
                label="Sqft"
                name="sq_ft"
                onChange={this.handleSqFtChange}
                value={this.state.sq_ft}
              />
            </div>
          </div>
          <div className="small-4 columns">
            <div>
              <DateField
                label="Date Available"
                name="date_available"
                onChange={this.handleDateAvailableChange}
                value={this.state.date_available}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="small-4 columns ">
            <RangeField
              label="Bedrooms"
              name="bedrooms"
              onChange={this.handleBedroomChange}
              value={this.state.bedrooms}
              max="5"
            />
            <div>
              <h8 className="slider-name" >{this.state.bedrooms} Bedrooms</h8>
            </div>
          </div>
          <div className="small-4 columns">
            <div>
              <RangeField
                label="Bathrooms"
                name="bathrooms"
                onChange={this.handleBathroomChange}
                value={this.state.bathrooms}
                max="5"
              />
              <div>
                <h8 className="slider-name" >{this.state.bathrooms}  Bathrooms</h8>
              </div>
            </div>
          </div>
          <div className="small-4 columns">
            <div>
              <RangeField
                label="Lease Length"
                name="lease_length"
                onChange={this.handleLeaseLengthChange}
                value={this.state.lease_length}
                max="12"
                />
                <div>
                  <h8 className="slider-name" >{this.state.lease_length} Months</h8>
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
                  onChange={this.handleHudChange}
                  value={this.state.hud}
                />
              </div>
            </div>
            <div className="small-4 columns">
              <div>
                <RadioFieldBool
                  label="Smoking"
                  name="smoking"
                  onChange={this.handleSmokingChange}
                  value={this.state.smoking}
                  />
                </div>
              </div>
            <div className="small-4 columns">
              <div>
                <RadioFieldBool
                  label="Pets"
                  name="pets"
                  onChange={this.handlePetsChange}
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
                onChange={this.handlezoningChange}
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
                    onChange={this.handleBuildingStyleChange}
                    value={this.state.building_style}
                  />
                </div>
              </div>
              <div className="small-4 columns">
                <div>
                  <RadioField
                    label="Parking Spaces"
                    name="parking_spaces"
                    option1="1"
                    option2="2"
                    onChange={this.handleParkingSpacesChange}
                    value={this.state.parking_spaces}
                  />
                </div>
              </div>
            </fieldset>
            <fieldset><legend>Living Specs</legend>
              <div className="small-4 columns">
                <div>
                  <TextTile
                    label="School District"
                    name="school_district"
                    onChange={this.handleSchoolDistrictChange}
                    value={this.state.school_district}
                  />
                </div>
              </div>
              <div className="small-4 columns">
                <RadioField
                  label="Cooling"
                  name="cooling"
                  option1="Central Air"
                  option2="None"
                  onChange={this.handleCoolingChange}
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
                    onChange={this.handleHeatingChange}
                    value={this.state.heating}
                    />
                  </div>
                </div>
            </fieldset>
            <fieldset><legend>Pictures</legend>


            <Dropzone onDrop={this.onDrop}>
      {({getRootProps, getInputProps}) => (
        <section className="container">
          <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
        </section>
      )}
    </Dropzone>




          <div>
            <h8 className="slider-name" >{this.state.file} Your Image</h8>
          </div>
            </fieldset>
        <input className="button" type="submit" value="Submit New Listing"/>
      </form>
    </div>
  </div>
)}}

export default ListingFormContainer
