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
        <div>
          <ul>
        <li><h5><b> Building Style:</b> {props.building_style}</h5></li>
        <li><h5><b> Heating:</b> {props.heating}</h5></li>
        <li><h5><b> Cooling:</b> {props.cooling}</h5></li>
        <li><h5><b> HUD:</b> {tf(props.hud)}</h5></li>
        <li><h5><b> Pets:</b> {tf(props.pets)}</h5></li>
        <li><h5><b> Smoking:</b> {tf(props.smoking)}</h5></li>
        <li><h5><b> School District:</b> {props.schooldistrict}</h5></li>
        <li><h5><b> Zoning:</b> {props.zoning}</h5></li>
        <li><h5><b> Parking:</b> {props.parkingspaces}</h5></li>
      </ul>
      </div>
    </div>
  )
}

export default AmenityTile
