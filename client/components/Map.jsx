import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { MAPBOX_TOKEN } from '../config/keys';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
import { Box, Grid, TextField, Button } from '@mui/material';

const Map = ({ user }) => {
  const [viewState, setViewState] = useState({
    longitude: -90.155,
    latitude: 29.95,
    zoom: 10
  });
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [price, setPrice] = useState(0);
  const [listingsArr, setListingsArr] = useState([]);
  const [coordinates, setCoordinates] = useState(null); 

  const [addressInput, setAddressInput] = useState('');
  
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
  }, [listingsArr.data]);

  const handleAddressInputChange = event => { 
    setAddressInput(event.target.value);
    console.log(addressInput);
  };

  const createNewListing = () => {
    console.log(coordinates, 'coordinates ln57');
    axios.post('http://localhost:8000/listings', {
      userId: user.id,
      description: description,
      imageURL: imageURL,
      longitude: coordinates[0],
      latitude: coordinates[1],
      address: addressInput,
      price: price
    });
  };

  const getCoordinates = (address) => {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${MAPBOX_TOKEN}`)
      .then(res => { 
        console.log(res.data.features[0].center);
        setCoordinates(res.data.features[0].center);
      })
      .catch(err => console.error(err));
  };
  /* eslint-disable func-style*/
  useEffect(() => { 
    async function fetchData() {
      const request = await getCoordinates(addressInput);
      console.log(request, 'request');
      return request;
    }
    fetchData();
  }, [addressInput]);
  console.log(coordinates, 'ln72', addressInput, listingsArr);

  return ( 
    <div className="map">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: 'background.primary',
          borderRadius: 1,
        }}
      >
        <ReactMapGL
          id="map_view"
          {...viewState}
          onMove={evt => setViewState(evt.viewState)}
          style={{width: 800, height: 600}}
          mapStyle="mapbox://styles/mapbox/dark-v10"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          <Marker longitude={-90.153865} latitude={29.965745} color="red" />
          {/* <Marker longitude={-90.15} latitude={29.966} color="red" /> */}
          { !listingsArr ? <div> </div> :
            listingsArr.map((listing, i) => (
              <Marker longitude={listing.longitude} latitude={listing.latitude} color="blue" key={i}/>
            ))
          }
        </ReactMapGL>
        <div className="add-listing" >
          <Grid container direction={'column'} spacing={2}>
            <Grid item>
              <TextField label="description" type="text" onChange={e => setDescription(e.target.value)} variant="outlined" required/>
            </Grid>
            <Grid item>
              <TextField label="imageUrl" type="text" onChange={e => setImageURL(e.target.value)} variant="outlined" />
            </Grid>
            {/* <Grid item>
              <TextField label="longitude" type="number" step="0.001" variant="outlined" />
            </Grid>
            <Grid item>
              <TextField label="latitude" type="number" step="0.001" variant="outlined" />
            </Grid> */}
            <Grid item>
              <TextField label="address" type="text" onChange={handleAddressInputChange} variant="outlined" required/>
            </Grid>
            <Grid item>
              <TextField label="price" type="number" step="0.01" onChange={e => setPrice(e.target.value)} variant="outlined" required/>
            </Grid>
          </Grid>
          <Button variant="contained" onClick={() => createNewListing()} color="primary">
              Create Listing
          </Button>

          {/* <form>
            <div><input type="text" placeholder="description" onChange={e => setDescription(e.target.value)} /></div>
            <div><input type="text" placeholder="imageUrl" onChange={e => setImageURL(e.target.value)}/></div>
            <div><input type="number" step="0.0001" placeholder="longitude" onChange={e => setLongitude(e.target.value)} required/></div>
            <div><input type="number" step="0.0001"placeholder="latitude" onChange={e => setLatitude(e.target.value)} required/></div>
            <div><input type="text" placeholder="address" onChange={e => setAddress(e.target.value)} required/></div>
            <div><input type="number" step="0.01" placeholder="price" onChange={e => setPrice(e.target.value)} required/></div>
            <Typography variant='h6'><button onClick={() => createNewListing()}>Create Listing</button></Typography>
          </form> */}
        </div>
      </Box>
    </div>
  );
  
};

export default Map;