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
          <ul>
        <li><h8><b> Heating:</b> {props.heating}</h8></li>
        <li><h8><b> Cooling:</b> {props.cooling}</h8></li>
        <li><h8><b> HUD:</b> {tf(props.hud)}</h8></li>
        <li><h8><b> Pets:</b> {tf(props.pets)}</h8></li>
        <li><h8><b> Smoking:</b> {tf(props.smoking)}</h8></li>
        <li><h8><b> School District:</b> {props.schooldistrict}</h8></li>
        <li><h8><b> Zoning:</b> {props.zoning}</h8></li>
      </ul>
      </div>
    </div>
  )
}

export default AmenityTile
