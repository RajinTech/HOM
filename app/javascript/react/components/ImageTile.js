import { Link } from 'react-router';
import React from 'react';

const ImageTile = (props) => {
  return (
    <div className="image-show">
      <img src={props.pic}></img>
    </div>
  )
}

export default ImageTile
