import {withScriptjs, withGoogleMap, Marker, GoogleMap} from "react-google-maps";
import React, { Component } from "react";

const InitialMap = withGoogleMap(props => {
  return(
    <GoogleMap
      ref={props.onMapLoad}
      zoom={13}
      center={{ lat: 42.458542, lng: -75.064056 }}
      onClick={props.onMapClick}
    >
      {props.children}
    </GoogleMap>
    )
  });

class Map extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='map_tile'>
        <div className='triangle_top'></div>

        <InitialMap
          containerElement={<div className="map_container"/>}
          mapElement={<div style={{ height: `100%` }} />}
        >
          {this.props.listingsall.map(listing => {
            return(
              <Marker
              key={listing.id}
              title={listing.street}
              position={{ lat: parseFloat(listing.latitude), lng: parseFloat(listing.longitude) }}
              />
            )
          })}
        </InitialMap>
        <div className='triangle_bottom'></div>

      </div>
    );
  }
}
export default Map;
