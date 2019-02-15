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
        <h3>-Heating: {props.heating}</h3>
        <h3>-Cooling: {props.cooling}</h3>
        <h3>-HUD: {tf(props.hud)}</h3>
        <h3>-Pets: {tf(props.pets)}</h3>
      <h3>-Smoking: {tf(props.smoking)}</h3>
        <h3>-School District: {props.schooldistrict}</h3>
        <h3>-Zoning: {props.zoning}</h3>
      </div>
  )
}

export default AmenityTile
