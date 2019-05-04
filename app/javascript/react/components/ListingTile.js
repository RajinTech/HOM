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
          <h5>{props.street} {props.unit}</h5>
          <h5>{props.city}, {props.state} {props.zip}</h5>
      </div>
      </div>
        <div className='bottom_half'>
          <div></div>
          <div>
          <h5> <b>Bed:</b> {props.bed}</h5>
          <h5> <b>Bath:</b>  {props.bath}</h5>
      </div>
          <div>
          <h5> <b>Sq Ft:</b>  {props.sqft}</h5>
          <h5> <b>Rent:</b>  ${props.rent}</h5>
      </div>
      <div></div>
      </div>
      </div>
          <img className="listing_photo" src={props.pic}></img>
      </Link>
    </div>
    <div className='triangle_right_small'></div>
      <button className="button form-submit" onClick={props.onClickDelete}>
    Delete
  </button>
  </div>

  )
}


export default ListingTile
