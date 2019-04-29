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

class MapShow extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='map_tile'>
        <div className='triangle_top'></div>

        <InitialMap
          containerElement={<div className="map_container" />}
          mapElement={<div style={{ height: `100%` }} />}
          center={{ lat: parseFloat(this.props.listingsall.latitude), lng: parseFloat(this.props.listingsall.longitude) }}
        >
        <Marker
        key={this.props.listingsall.id}
        title={this.props.listingsall.street}
        position={{ lat: parseFloat(this.props.listingsall.latitude), lng: parseFloat(this.props.listingsall.longitude) }}
        />
        </InitialMap>
        <div className='triangle_bottom'></div>

      </div>
    );
  }
}
export default MapShow;
