import React, { Component } from 'react';
import TextTile from '../components/TextTile';
import RangeField from '../components/RangeField';
import DateField from '../components/DateField';
import { browserHistory } from 'react-router'

class FeatureFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bedrooms: "3",
      bathrooms: "2",
      rent: "",
      sq_ft: "",
      date_available: "",
      lease_length: "12"
    }

    this.handleBedroomChange = this.handleBedroomChange.bind(this)
    this.handleBathroomChange = this.handleBathroomChange.bind(this)
    this.handleRentChange = this.handleRentChange.bind(this)
    this.handleSqFtChange = this.handleSqFtChange.bind(this)
    this.handleDateAvailableChange = this.handleDateAvailableChange.bind(this)
    this.handleLeaseLengthChange = this.handleLeaseLengthChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
      features: this.state
    };
    fetch('/api/v1/listings/${this.props.params.id}/featuers', {
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
          console.log(formPayload);
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
    return(
      <div className="row new-listing">
        <div className="row-one"></div>
        <div className="form-header">Add Features</div>
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
      </div>

    )
  }
}

export default FeatureFormContainer
