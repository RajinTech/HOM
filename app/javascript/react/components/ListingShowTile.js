import { Link } from 'react-router';
import React from 'react';

const ListingShow = (props) => {
  return (
    <div>
      <Link to={`/listings/${props.id}`}>
      <div className="content-tile-show">
        <h5><b>{props.street} {props.unit}</b></h5>
        <h6><b>{props.city}, {props.state}{props.zip}</b></h6>
      <div className="flex-column">
        <h6> <b>Bed:</b> {props.bed}</h6>
        <h6> <b>Bath:</b> {props.bath}</h6>
        <h6> <b>Sq Ft:</b> {props.sqft}</h6>
        <h6> <b>Rent:</b> ${props.rent}</h6>
      </div>
    </div>
      </Link>
    </div>
  )
}

export default ListingShow
