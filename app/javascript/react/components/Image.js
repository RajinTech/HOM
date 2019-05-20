import { Link } from 'react-router';
import React from 'react';

const Image = (props) => {
  return (
    <img
      key={props.key}
      src={props.src}
      onClick={props.onClick}
      id={props.id}
      >
    </img>
  )
}

export default Image
