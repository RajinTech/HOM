import React from 'react';
import { Link } from 'react-router';

const AmenityTile = (props) => {


  return (
      <div className="panel amenity-tile">

        <h5>Heating: {props.heating}</h5>
        <h5>Cooling: {props.cooling}</h5>
        <h5>HUD: {props.hud}</h5>
        <h5>Pets: {props.pets}</h5>
        <h5>School District: {props.schooldistrict}</h5>
        <h5>Smoking: {props.smoking}</h5>
        <h5>Zoning: {props.zoning}</h5>
      </div>
  )
}

export default AmenityTile
