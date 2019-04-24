import { Link } from 'react-router';
import React from 'react';

const ListingShow = (props) => {
  return (
    <div className='listing_show'>
      <Link to={`/listings/${props.id}`}>
        <h1>{props.street} {props.unit}</h1>
          <h1>{props.city}, {props.state}{props.zip}</h1>
      <div className='container'>
        <div>

      <ul>
        <li><h8> <b>Bed:</b> {props.bed}</h8></li>
        <li><h8> <b>Bath:</b> {props.bath}</h8></li>
        <li><h8> <b>Rent:</b> ${props.rent}</h8></li>
      </ul>
    </div>
<div>


      <ul>
        <li><h8><b> Heating:</b> {props.heating}</h8></li>
        <li><h8><b> Cooling:</b> {props.cooling}</h8></li>
        <li><h8><b> Parking:</b> {props.parkingspaces}</h8></li>
      </ul>
    </div>
<div>

      <ul>
        <li><h8><b> Building Style:</b> {props.buildingstyle}</h8></li>
        <li><h8> <b>Sq Ft:</b> {props.sqft}</h8></li>
        <li><h8><b> School District:</b> {props.schooldistrict}</h8></li>
        <li><h8><b> Zoning:</b> {props.zoning}</h8></li>
      </ul>
    </div>
<div>

      <ul>
        <li><h8><b> Smoking:</b> {(props.smoking)}</h8></li>
        <li><h8><b> Pets:</b> {(props.pets)}</h8></li>
        <li><h8><b> HUD:</b> {(props.hud)}</h8></li>
      </ul>
    </div>

    </div>
      </Link>
    </div>
  )
}

export default ListingShow
