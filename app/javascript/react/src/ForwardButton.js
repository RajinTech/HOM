import React from 'react';
import { browserHistory } from 'react-router'

const ForwardButton = () => {
  return(
    <div className="button-nav">
      <button onClick={browserHistory.goForward}>Forward</button>
    </div>
  )
}

export default ForwardButton;
