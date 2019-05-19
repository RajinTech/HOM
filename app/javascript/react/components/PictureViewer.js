import { Link } from 'react-router';
import React from 'react';

const PictureViewer = (props) => {
  return (
    <div className='zoomed_background'>
    <div className='zoomed_listing_photo'>
    <img src={props.image}>
    </img>
  </div>
</div>
  )
}

export default PictureViewer
