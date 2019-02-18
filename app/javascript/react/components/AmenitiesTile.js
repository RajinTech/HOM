import { Link } from 'react-router';
import React from 'react';

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
        <div className="amenity-text">
        <h3><b>Heating:</b> {props.heating}</h3>
        <h3><b>Cooling:</b> {props.cooling}</h3>
        <h3><b>HUD:</b> {tf(props.hud)}</h3>
        <h3><b>Pets:</b> {tf(props.pets)}</h3>
        <h3><b>Smoking:</b> {tf(props.smoking)}</h3>
        <h3><b>School District:</b> {props.schooldistrict}</h3>
        <h3><b>Zoning:</b> {props.zoning}</h3>
      </div>
    </div>
  )
}

export default AmenityTile
