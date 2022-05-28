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
  const [coordinates, setCoordinates] = useState([0, 0]); 

  const [addressInput, setAddressInput] = useState('');
  const [userId, setUserId] = useState(0);
  useEffect(() => { // <-- this is the same as componentDidMount
    const getAllListings = () => {
      axios.get('/listings')
        .then(listingsArr => {
          console.log(listingsArr.data);
          setListingsArr(listingsArr.data);
        })
        .catch(err => console.error(err));
    };
    getAllListings();
  }, []); 

  const handleAddressInputChange = event => { 
    setAddressInput(event.target.value);
    console.log(addressInput);
  };

  const createNewListing = () => {
    setUserId(user.id);
    console.log(coordinates, userId);
    axios.post('/listings', {
      userId: user.id, // <-- this is the userId of the logged in user [(bug) not saving userId to db]
      description: description,
      imageURL: imageURL,
      longitude: coordinates[0],
      latitude: coordinates[1],
      address: addressInput,
      price: price
    }).then(() => {
      axios.get('/listings').then(listings => {
        console.log(listings.data, 'data ln51');
        setListingsArr(listings.data);
      });
    }).catch(err => console.error(err));
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
          id="map-view"
          {...viewState}
          onMove={evt => setViewState(evt.viewState)}
          style={{width: 800, height: 600}}
          mapStyle="mapbox://styles/mapbox/dark-v10"
          mapboxAccessToken={MAPBOX_TOKEN}>
          { !listingsArr ? <div> </div> :
            listingsArr.map((listing, i) => (
              <Marker longitude={listing.longitude} latitude={listing.latitude} color="red" key={i}/>
            ))
          }
        </ReactMapGL>
        <div className="map-listing-form">
          <Grid container direction={'column'} spacing={2}>
            <Grid item>
              <TextField label="description" type="text" onChange={e => setDescription(e.target.value)} variant="outlined" required/>
            </Grid>
            <Grid item>
              <TextField label="imageUrl" type="text" onChange={e => setImageURL(e.target.value)} variant="outlined" />
            </Grid>
            <Grid item>
              <TextField label="address" type="text" onChange={handleAddressInputChange} variant="outlined" required/>
            </Grid>
            <Grid item>
              <TextField label="price" type="number" step="0.01" onChange={e => setPrice(e.target.value)} variant="outlined" required/>
            </Grid>
          </Grid>
          <div className="create-listing-btn">
            <Button variant="contained" onClick={() => createNewListing()} color="primary">
              Create Listing
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
  
};

export default Map;