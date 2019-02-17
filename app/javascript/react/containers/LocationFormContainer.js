import React, { Component } from 'react';
import TextTile from '../components/TextTile';
import { browserHistory } from 'react-router'
import FeatureFormContainer from './FeatureFormContainer'

class ListingFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      street: "",
      unit: "",
      city: "",
      state: "",
      zip: ""
    }
    this.handleStreetChange = this.handleStreetChange.bind(this)
    this.handleUnitChange = this.handleUnitChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleZipChange = this.handleZipChange.bind(this)
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
      <FeatureFormContainer/>

        <input className="button round form-submit" type="submit" value="Submit New Listing"/>
        </form>
      </div>

    )
  }
}

export default ListingFormContainer
