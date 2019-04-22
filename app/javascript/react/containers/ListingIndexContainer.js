import ListingTile from '../components/ListingTile'
import React, { Component } from 'react';
import { Link } from 'react-router';
import Map from '../components/Map'


class ListingIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings_all: [],
      listings_show: [],
      first_pictures:[]
    }
    this.roledexforward = this.roledexforward.bind(this)
    this.roledexback = this.roledexback.bind(this)
    this.current_Pic = this.current_Pic.bind(this)
  }

  roledexforward(){
    let holder = this.state.listings_all
    let pergatory = holder.pop()
    holder.unshift(pergatory)
    this.setState({ listings_all: holder})
  }

  roledexback(){
    let holder = this.state.listings_all
    let pergatory = holder.shift()
    holder.push(pergatory)
    this.setState({ listings_all: holder})
  }

 current_Pic(position){
    this.setState({ showtile: picture_gallery[position]})
  }

  componentWillMount() {
  fetch(`/api/v1/listings.json`)
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
      this.setState({ listings_all: responseData });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let listings_display = this.state.listings_all.slice(0, 13).map((listing) => {
      return (
          <ListingTile
            key={listing.id}
            id={listing.id}
            city={listing.city}
            state={listing.state}
            street={listing.street}
            unit={listing.unit}
            zip={listing.zip}
            bed={listing.features.bedrooms}
            bath={listing.features.bathrooms}
            sqft={listing.features.sq_ft}
            rent={listing.features.rent}
            pic={listing.pictures}
          />
      )
    })
    return(
      <div className='main'>
        <div className="row">
            <div className="columns small-4 listing_container">
              {listings_display}
            </div>
            <div className="columns small-4 ">
              <Map
                listingsall={this.state.listings_all}
              />
            </div>
            <div className="columns small-2 ">
              <div  onClick={this.roledexforward}><h5>UP</h5></div>
              <div  onClick={this.roledexback}><h5>DOWN</h5></div>
            </div>
        </div>
      </div>
  )}
}

export default ListingIndexContainer
