import React from 'react';

const ScrollTile = (props) => {
  return (
    <button
      className="button-nav"
      onMouseEnter={props.onHoverEnterHandler}
      onMouseLeave={props.onHoverLeaveHandler}
      onClick={props.onHoverEnterHandler}>
      Scroll</button>
    );
}

export default ScrollTile;
