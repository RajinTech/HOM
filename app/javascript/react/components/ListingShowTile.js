import { Link } from 'react-router';
import React from 'react';

const ListingShow = (props) => {
  return (
    <div>
      <Link to={`/listings/${props.id}`}>
        <h8><b>{props.street} {props.unit}</b></h8>
        <h8><b>{props.city}, {props.state}{props.zip}</b></h8>
      <div>
        <ul>
        <li><h8> <b>Bed:</b> {props.bed}</h8></li>
      <li><h8> <b>Bath:</b> {props.bath}</h8></li>
    <li><h8> <b>Sq Ft:</b> {props.sqft}</h8></li>
  <li><h8> <b>Rent:</b> ${props.rent}</h8></li>
      </ul>
      </div>
      </Link>
    </div>
  )
}

export default ListingShow
