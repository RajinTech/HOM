import { Link } from 'react-router';
import React from 'react';

const ListingTile = (props) => {
  return (
    <div className='listing_show_container'>
    <div className='triangle_left_small'></div>
    <div className="listing_tile">
      <Link to={`/listings/${props.id}`}>
      <div>
        <div className='top_half'>
          <div className='horizontal_centering'>
          <h8>{props.street} {props.unit}</h8>
          <h8>{props.city}, {props.state} {props.zip}</h8>
      </div>
      </div>
        <div className='bottom_half'>

          <h8> <b>Bed:</b> {props.bed}</h8>
          <h8> <b>Bath:</b>  {props.bath}</h8>
          <h8> <b>Sq Ft:</b>  {props.sqft}</h8>
          <h8> <b>Rent:</b>  ${props.rent}</h8>
      </div>
      </div>
          <img className="listing_photo" src={props.pic}></img>
      </Link>
    </div>
    <div className='triangle_right_small'></div>
  </div>

  )
}


export default ListingTile
