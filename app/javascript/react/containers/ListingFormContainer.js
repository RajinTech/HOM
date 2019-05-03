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
      image: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}

  handleSubmit(event){
    event.preventDefault();
    let formPayload = this.state;
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
        browserHistory.push(`/listings`);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){


    return(
      <div>
      <div className="row">
        <div className="row"></div>
      <div><h1>Add a New Listing</h1></div>
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
              />
            </div>
          </div>
          <div className="small-4 columns">
            <div>
              <TextTile
                label="Unit"
                name="unit"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                value={this.state.city}
              />
            </div>
          </div>
          <div className="small-4 columns">
            <div>
              <TextTile
                label="State"
                name="state"
                onChange={this.handleChange}
                value={this.state.state}
              />
            </div>
          </div>
          <div className="small-4 columns">
            <div>
              <TextTile
                label="Zip"
                name="zip"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                value={this.state.rent}
              />
            </div>
          </div>
          <div className="small-4 columns">
            <div>
              <TextTile
                label="Sqft"
                name="sq_ft"
                onChange={this.handleChange}
                value={this.state.sq_ft}
              />
            </div>
          </div>
          <div className="small-4 columns">
            <div>
              <DateField
                label="Date Available"
                name="date_available"
                onChange={this.handleChange}
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
              onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                  onChange={this.handleChange}
                  value={this.state.hud}
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
                />
              </div>
            </div>

          <div>
            <h8 className="slider-name" >{this.state.image} Your Image</h8>
          </div>
            </fieldset>
        <input className="button" type="submit" value="Submit New Listing"/>
      </form>
    </div>
  </div>
)}}

export default ListingFormContainer
