import React from 'react';
import { Link, browserHistory } from 'react-router'
import BackButton from './BackButton'
import ForwardButton from './ForwardButton'


const NavBar = props => {
  return(
    <div>
      <div className="nav-bar-set">
      <button
        className="button-nav"
        onClick={browserHistory.goBack}>
        Back</button>
      <a href='/listings/new'>
      <button
        className="button-nav" >
        New Listing </button>
    </a>
    <a  href='/listings'>
      <button
        className="button-nav">
        All Listings</button>
    </a>
      <button
        className="button-nav" onClick={browserHistory.goForward}>
        Forward</button>
        </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default NavBar;
