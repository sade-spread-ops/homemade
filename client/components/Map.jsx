import * as React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { MAPBOX_TOKEN } from '../config/keys';
import 'mapbox-gl/dist/mapbox-gl.css';
// import { Typography } from '@mui/material';

const Map = (props) => {
  const [viewState, setViewState] = React.useState({
    longitude: -90.155,
    latitude: 29.95,
    zoom: 12
  });

  return ( 
    <div className="map">
      <ReactMapGL
        id="map_view"
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        style={{width: 800, height: 600}}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={-90.156} latitude={29.966} color="red" />
        <Marker longitude={-90.15} latitude={29.966} color="red" />
      </ReactMapGL>
      <div className="add-listing">
        <form>
          <div><input type="text" placeholder='longitude'/></div>
          <div><input type="text" placeholder='latitude'/></div>
          <button>Create Marker</button>

        </form>
      </div>
    </div>
  );
  
};

export default Map;