import React from 'react';
import { Link } from 'react-router';

const ListingTile = (props) => {
  return (
    <div>

      <Link to={`/listings/${props.id}`}>
      <div className="content-tile-index">
        <h5>{props.street} {props.unit}</h5>
          <h6>{props.city}, {props.state}{props.zip}</h6>

        <div className="flex-column">

        <h8> Bed: {props.bed}</h8>
      <h8> Bath: {props.bath}</h8>
    <h8> Sq Ft: {props.sqft}</h8>
  <h8> Rent: ${props.rent}</h8>
  </div>
        <img className=" photo-box-show" src={props.pic}></img>
      </div>
      </Link>
    </div>
  )
}

export default ListingTile
