import React from 'react';
import { browserHistory } from 'react-router'

const ForwardButton = () => {
  return(
    <div className="back-button">
      <button onClick={browserHistory.goForward}>Forward</button>
    </div>
  )
}

export default ForwardButton;
