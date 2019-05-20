import { Link } from 'react-router';
import React from 'react';

const ListingImage = (props) => {
  return (
    <div className='horizontal_container animate_entrance'>
      <div className='triangle_left_small'></div>
        <div className="bordered_listing_photo">
        <img
          src={props.src}
          onClick={props.onClick}
          id={props.id}
          >
        </img>
      </div>
      <div className='triangle_right_small'></div>
    </div>
  )
}

export default ListingImage
