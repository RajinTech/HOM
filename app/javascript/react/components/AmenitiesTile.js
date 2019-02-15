import React from 'react';
import { Link } from 'react-router';

const AmenityTile = (props) => {

  let tf = (data) => {
    if(data == false){
      return "No"
    } else {
      return "Yes"
    }
  };


  return (
      <div className="amenity-tile">
        <h5>Heating: {props.heating}</h5>
        <h5>Cooling: {props.cooling}</h5>
        <h5>HUD: {tf(props.hud)}</h5>
        <h5>Pets: {tf(props.pets)}</h5>
      <h5>Smoking: {tf(props.smoking)}</h5>
        <h5>School District: {props.schooldistrict}</h5>
        <h5>Zoning: {props.zoning}</h5>
      </div>
  )
}

export default AmenityTile
