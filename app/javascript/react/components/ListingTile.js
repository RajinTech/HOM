import React from 'react';
import { Link } from 'react-router';

const ListingTile = (props) => {


  return (

      <div className="content-tile">
        <h5>{props.street} {props.unit}</h5>
        <h6>{props.city}, {props.state} {props.zip}</h6>
        <h6>Bed: {props.bedrooms}</h6>
        <h6>Bath: {props.bathrooms}</h6>
        <h6>rent: {props.rent}</h6>
        <h6>sqft: {props.sqft}</h6>
      </div>

  )
}

export default ListingTile
