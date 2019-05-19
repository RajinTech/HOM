import { Link } from 'react-router';
import React from 'react';

const ListingShow = (props) => {
  return (
    <div className='listing_show animate_entrance '>
      <Link to={`/listings/${props.id}`}>

        <h1>{props.street} {props.unit}</h1>
        <h1>{props.city}, {props.state}{props.zip}</h1>
      <div className='container flex_direction'>
        <div>

      <ul>
        <li><h5> <b>Bed:</b> {props.bed}</h5></li>
        <li><h5> <b>Bath:</b> {props.bath}</h5></li>
        <li><h5> <b>Rent:</b> ${props.rent}</h5></li>
      </ul>
    </div>
<div>


      <ul>
        <li><h5><b> Heating:</b> {props.heating}</h5></li>
        <li><h5><b> Cooling:</b> {props.cooling}</h5></li>
      <li><h5><b> Parking Spaces:</b> {props.parkingspaces}</h5></li>
      </ul>
    </div>
<div>

      <ul>
        <li><h5><b> Building Style:</b> {props.buildingstyle}</h5></li>
        <li><h5> <b>Sq Ft:</b> {props.sqft}</h5></li>
        <li><h5><b> School District:</b> {props.schooldistrict}</h5></li>
      </ul>
    </div>
<div>

      <ul>
        <li><h5><b> Smoking:</b> {(props.smoking)}</h5></li>
        <li><h5><b> Pets:</b> {(props.pets)}</h5></li>
        <li><h5><b> HUD:</b> {(props.hud)}</h5></li>
      </ul>
    </div>

    </div>
      </Link>
    </div>
  )
}

export default ListingShow
