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
      <div className='vertical_container'>
        <div className='triangle_top'></div>

        <InitialMap
          containerElement={<div className="map_container" />}
          mapElement={<div style={{ height: `100%` }} />}
          center={{ lat: parseFloat(this.props.latitude), lng: parseFloat(this.props.longitude) }}
        >
        <Marker
        key={this.props.id}
        title={this.props.street}
        position={{ lat: parseFloat(this.props.latitude), lng: parseFloat(this.props.longitude) }}
        />
        </InitialMap>
        <div className='triangle_bottom'></div>

      </div>
    );
  }
}
export default MapShow;
