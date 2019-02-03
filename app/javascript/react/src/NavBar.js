import React from 'react';
import { Link } from 'react-router'
import BackButton from './BackButton'
import ForwardButton from './ForwardButton'


const NavBar = props => {
  return(
    <div>
      <div className="navbar">
      <BackButton />
        <Link to='/'> HOME </Link>
        <Link to='/'>All Listings</Link>
      <ForwardButton/>
      </div>
      <div className="content">
        <h1 className="page-title">Listings</h1>
        {props.children}
      </div>
    </div>
  )
}

export default NavBar;
