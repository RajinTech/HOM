import React from 'react';
import { browserHistory } from 'react-router'

const BackButton = () => {
  return(
    <div className="button sml radius: 50 radius">
      <button onClick={browserHistory.goBack}>Back</button>
    </div>
  )
}

export default BackButton;
