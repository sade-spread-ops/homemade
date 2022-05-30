import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import axios from 'axios';
const Listings = () => {
  const [listingsArr, setListingsArr] = useState([]);

  useEffect(() => {
    const getAllListings = () => {
      axios.get('/listings')
        .then(listingsArr => {
          console.log(listingsArr.data);
          setListingsArr(listingsArr.data);
        })
        .catch(err => console.error(err));
    };
    getAllListings();
  }, [listingsArr.data]); 

  return (

    <Container sx={{
      marginY: 5
    }}>
      <Grid container spacing={5}>
        {
          listingsArr.map((listing, i) => (
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }} key={`${listing.id}-${i}`}>
                <CardMedia
                  component="img"
                  alt={listing.description}
                  height="140"
                  image={ listing.imageURL }/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {listing.description}
                  </Typography>
                  <Typography variant="body3" color="text.secondary">
                    {listing.address}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Message the Lessor</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
};

export default Listings;
