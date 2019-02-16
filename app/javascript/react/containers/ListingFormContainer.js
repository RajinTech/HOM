  import React, { Component } from 'react';
import TextTile from '../components/TextTile';
import { browserHistory } from 'react-router'
import RangeField from '../components/RangeField';
import DateField from '../components/DateField';
import FeatureFormContainer from './FeatureFormContainer'
import RadioField from '../components/RadioField'
import RadioFieldBool from '../components/RadioFieldBool'

class ListingFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      street: "123 Main st ",
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
      image: "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.06.47+AM.png"
    }
    // this.state = {
    //   location: {
    //     street: "123 Main st ",
    //     unit: "",
    //     city: "Oneonta",
    //     state: "NY",
    //     zip: "13820"},
    //   features:{
    //     bedrooms: "3",
    //     bathrooms: "2",
    //     rent: "1000",
    //     sq_ft: "1000",
    //     date_available: "2019-02-01",
    //     lease_length: "12"},
    //   amenities: {
    //     building_style: "Duplex",
    //     parking_spaces: "2",
    //     pets: false,
    //     zoning: "Residential",
    //     school_district: "",
    //     heating: "Gas",
    //     cooling: "Central Air",
    //     hud: false,
    //     smoking: false},
    //   pictures: {
    //   image: "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.06.47+AM.png"}
    //
    // }
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
    this.handlePictureChange = this.handlePictureChange.bind(this)


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
    this.setState({
      features:{
        date_available: newDateAvailable,
      }
    })
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

  handlePictureChange(event) {
    let newPicture = event.target.value
    this.setState({ image: newPicture })
  }


  handleSubmit(event){
    event.preventDefault();
    let formPayload = this.state;
    console.log(formPayload);
    fetch('/api/v1/listings', {
      credentials: 'same-origin',
      method: 'POST',
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
        browserHistory.push(`/listings/1`);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    console.log(this.state)

    return(
      <div className="row new-listing">
        <div className="row-one"></div>
        <div className="form-header">Add a New Listing</div>

      <form onSubmit={this.handleSubmit} className="panel">
        <fieldset><legend>Location</legend>
          <div className="row">
            <div className="small-8 columns">
              <div className="streettext">
              <TextTile
                label="Street"
                name="street"
                onChange={this.handleStreetChange}
                value={this.state.street}
              />
            </div>
          </div>

          <div className="small-4 columns">
            <div className="datetext">
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
            <div className="datetext" >
              <TextTile
                label="City"
                name="city"
                onChange={this.handleCityChange}
                value={this.state.city}
              />
            </div>
          </div>

          <div className="small-4 columns">
            <div className="datetext" >
              <TextTile
                label="State"
                name="state"
                onChange={this.handleStateChange}
                value={this.state.state}
              />
            </div>
          </div>

          <div className="small-4 columns">
            <div className="datetext">
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
            <div className="datetext">
              <TextTile
                label="Rent"
                name="rent"
                onChange={this.handleRentChange}
                value={this.state.rent}
              />
            </div>
          </div>

          <div className="small-4 columns">
            <div className="datetext">
              <TextTile
                label="Sqft"
                name="sq_ft"
                onChange={this.handleSqFtChange}
                value={this.state.sq_ft}
              />
            </div>
          </div>

          <div className="small-4 columns">
            <div className="datetext">
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
          <div className="small-4 columns">
            <RangeField
              label="Bedrooms"
              name="bedrooms"
              onChange={this.handleBedroomChange}
              value={this.state.bedrooms}
              max="5"
            />
            <div>
              <h5>{this.state.bedrooms} Bedrooms</h5>
            </div>
          </div>

          <div className="small-4 columns">
            <div className="datetext">
              <RangeField
                label="Bathrooms"
                name="bathrooms"
                onChange={this.handleBathroomChange}
                value={this.state.bathrooms}
                max="5"
              />
              <div>
                <h5>{this.state.bathrooms}  Bathrooms</h5>
              </div>
            </div>
          </div>

          <div className="small-4 columns">
            <div className="datetext">
              <RangeField
                label="Lease Length"
                name="lease_length"
                onChange={this.handleLeaseLengthChange}
                value={this.state.lease_length}
                max="12"
                />
                <div>
                  <h5>{this.state.lease_length} Months</h5>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
          <fieldset><legend>Houseing Restrictions</legend>
            <div className="small-4 columns">
              <div className="datetext">
                <RadioFieldBool
                  label="Hud"
                  name="hud"
                  onChange={this.handleHudChange}
                  value={this.state.hud}

                />
              </div>
            </div>

            <div className="small-4 columns">
              <div className="datetext">
                <RadioFieldBool
                  label="Smoking"
                  name="smoking"
                  onChange={this.handleSmokingChange}
                  value={this.state.smoking}
                  />
                </div>
              </div>


            <div className="small-4 columns">
              <div className="datetext">
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
                <div className="datetext">
                  <RadioField
                    label="Buidling Style"
                    name="building_style"
                    option1="House"
                    option2="Duplex"
                    onChange={this.handleBuildingStyleChange}
                    value={this.state.building_style}
                  />
                </div>
              </div>

              <div className="small-4 columns">
                <div className="datetext">
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
                <div className="datetext">
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
                <div className="datetext">
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

        <input className="button form-submit" type="submit" value="Submit New Listing"/>
    </form>



      </div>

    )
  }
}

export default ListingFormContainer
