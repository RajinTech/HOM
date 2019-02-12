import React, { Component } from 'react';
import TextTile from '../components/TextTile';
import RangeField from '../components/RangeField';
import RangeField2 from '../components/RangeField2';
import DateField from '../components/DateField';
import { browserHistory } from 'react-router'

class ListingFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      street: "",
      unit: "",
      city: "",
      state: "",
      zip: "",
      bedrooms: "3",
      bathrooms: "2",
      rent: "",
      sq_ft: "",
      date_available: "",
      lease_length: "12"
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
    this.setState({ date_available: newDateAvailable })
  }

  handleLeaseLengthChange(event) {
    let newLeaseLength = event.target.value
    this.setState({ lease_length: newLeaseLength })
  }




  handleSubmit(event){
    event.preventDefault();
    let formPayload = {
      listing: this.state
    };


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
        browserHistory.push(``);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    console.log(this.state);
    return(


      <div className="row">
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

      <fieldset><legend>Attributes</legend>
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

        <input className="button round form-submit" type="submit" value="Submit New Listing"/>
        </form>
      </div>

    )
  }
}

export default ListingFormContainer
