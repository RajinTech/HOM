import React from 'react';
import { Link } from 'react-router';

const ImageTile = (props) => {
  return (
    <div>
    <a href="/listings/${props.id}">
      <div><image src="{props.pic}"></image></div>
      </a>
    </div>
  )
}

export default ImageTile
