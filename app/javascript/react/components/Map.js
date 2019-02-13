import React, { Component } from "react";
import {withScriptjs, withGoogleMap, Marker, GoogleMap} from "react-google-maps";

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
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        <InitialMap
          containerElement={<div className="map-box" />}
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
      </div>
    );
  }
}
export default Map;