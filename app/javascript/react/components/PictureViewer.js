import { Link } from 'react-router';
import React from 'react';

const PictureViewer = (props) => {
  return (
    <div>
      <div className='zoomed_background'>
        </div>
      <div className='zoomed_listing_photo horizontal_container'>
        <img
          src={props.image}>
        </img>
      </div>
    </div>
  )
}

export default PictureViewer
