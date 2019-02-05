import React from 'react';
import { browserHistory } from 'react-router'

const ForwardButton = () => {
  return(
    <div className="button sml radius: 50 radius">
      <button onClick={browserHistory.goForward}>Forward</button>
    </div>
  )
}

export default ForwardButton;
