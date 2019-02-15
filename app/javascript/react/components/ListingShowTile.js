import React from 'react';
import { Link } from 'react-router';

const ListingShow = (props) => {

  return (
    <div>
      <Link to={`/listings/${props.id}`}>
      <div className="content-tile-show">
        <h5>-{props.street} {props.unit}</h5>
          <h6>-{props.city}, {props.state}{props.zip}</h6>
        <div className="flex-column">
        <h6> -Bed: {props.bed}</h6>
      <h6> -Bath: {props.bath}</h6>
    <h6> -Sq Ft: {props.sqft}</h6>
  <h6> -Rent: ${props.rent}</h6>
  </div>
      </div>
      </Link>
    </div>
  )
}

export default ListingShow
