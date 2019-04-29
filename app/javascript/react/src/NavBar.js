import React from 'react';
import { Link, browserHistory } from 'react-router'

const NavBar = props => {
  return(

      <div className="nav-bar-set">
        {props.children}
    </div>

  )
}

export default NavBar;
