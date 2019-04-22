import { Link } from 'react-router';
import React from 'react';

const ListingTile = (props) => {
  return (
    <div className="listing_tile">
      <Link to={`/listings/${props.id}`}>
          <h5>{props.street} {props.unit}</h5>
          <h6>{props.city}, {props.state}{props.zip}</h6>
        <div className="flex-column">
          <h8> <b>Bed:</b> {props.bed}</h8>
          <h8> <b>Bath:</b>  {props.bath}</h8>
          <h8> <b>Sq Ft:</b>  {props.sqft}</h8>
          <h8> <b>Rent:</b>  ${props.rent}</h8>
        </div>
          <img className="listing_photo" src={props.pic}></img>
      </Link>
    </div>
  )
}


export default ListingTile
