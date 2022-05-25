import * as React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { MAPBOX_TOKEN } from '../config/keys';

import 'mapbox-gl/dist/mapbox-gl.css';


// import { Typography } from '@mui/material';


const Map = () => {
  
  const [viewState, setViewState] = React.useState({
    longitude: -90.155,
    latitude: 29.95,
    zoom: 11
  });

  return <ReactMapGL
    
    id="map"
    {...viewState}
    onMove={evt => setViewState(evt.viewState)}
    style={{width: 800, height: 600}}
    mapStyle="mapbox://styles/mapbox/dark-v10"
    mapboxAccessToken={MAPBOX_TOKEN}
  >
    <Marker longitude={-90.140} latitude={29.966} color="red" />
    <Marker longitude={-90.154} latitude={29.966} color="red" />
  </ReactMapGL>;
  
};

export default Map;