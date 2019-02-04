import React, { Component } from 'react';
import { Link } from 'react-router';
import MapContainer from './MapContainer'


class ListingShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
    return(
      <div>
        Listings Show Container
        <MapContainer/>
      </div>
    )
  }
}

export default ListingShowContainer
