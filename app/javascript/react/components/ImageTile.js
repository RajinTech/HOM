import React from 'react';
import { Link } from 'react-router';

const ImageTile = (props) => {
  return (
    <div className="image-show">
      <img src={props.pic}></img>
    </div>
  )
}

export default ImageTile
