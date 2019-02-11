import React from 'react';
import { Link } from 'react-router';

const ListingTile = (props) => {
console.log(props);
  return (
    <div>

    <a href="/listings/${props.id}">
      <div className="content-tile-index">
        <h5>{props.street} {props.unit}</h5>
        <h6>{props.city}, {props.state}</h6>
        <img className="photo-box-show" src={props.pic}></img>
      </div>
      </a>
    </div>
  )
}

export default ListingTile
