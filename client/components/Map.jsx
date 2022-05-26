import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { MAPBOX_TOKEN } from '../config/keys';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
// import { Typography } from '@mui/material';

const Map = (props) => {
  const [viewState, setViewState] = React.useState({
    longitude: -90.155,
    latitude: 29.95,
    zoom: 12
  });
  const [longitude, setLongitude] = useState(-90);
  const [latitude, setLatitude] = useState(29);
  const [listingsArr, setListingsArr] = useState();
  // console.log(props.user.id);

  const createNewListing = () => {
    axios.post('http://localhost:8000/listings', {
      userId: props.user.id,
      longitude: longitude,
      latitude: latitude
    });
  };

  useEffect(() => {
    const getAllListings = () => {
      axios.get('http://localhost:8000/listings')
        .then(listingsArr => {
          console.log(listingsArr.data);
          setListingsArr(listingsArr.data);
        })
        .catch(err => console.error(err));
    };
    getAllListings();
  }, []);
  // console.log(listingsArr, 'ln38');

  
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
        { !listingsArr ? <div> </div> :
          listingsArr.map((listing, i) => (
            <Marker longitude={listing.longitude} latitude={listing.latitude} color="blue" key={i}/>
          ))
        }
      </ReactMapGL>
      <div className="add-listing">
        

        <form>
          <div><input type="number" step="0.0001" placeholder='longitude' onChange={e => setLongitude(e.target.value)} required/></div>
          <div><input type="number" step="0.0001"placeholder='latitude' onChange={e => setLatitude(e.target.value)} required/></div>
          <button onClick={() => createNewListing()}>Create Marker</button>

        </form>
      </div>
    </div>
  );
  
};

export default Map;