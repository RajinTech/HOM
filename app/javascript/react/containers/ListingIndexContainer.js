import React, { Component } from 'react';
import { Link } from 'react-router';
import ListingTile from '../components/ListingTile'
import MapContainer from './MapContainer'


class ListingIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
    return(
      <div>
        hello from listing index
        <ListingTile
        />
      <MapContainer/>
      </div>
    )
  }
}

export default ListingIndexContainer
