import { Link } from 'react-router';
import React from 'react';

const PictureViewer = (props) => {
  if(props.src){
    return (
      <div className='horizontal_container'>
        <div className='zoomed_listing_photo animate_picture_viewer'>
          <img
            src={props.src}>
          </img>
        </div>
        <button
          onClick={props.onClick}
          className='zoomed_exit buttons'> Close
        </button>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default PictureViewer
