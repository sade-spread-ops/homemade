import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



const Lessor = (props) => {
  const addLessor = () => {
    axios.post('http://localhost:8000/matches', {
      matchRequestSender: props.user.email,
      matchRequestReceiver: props.lessor.email
    })
      .then((results) => {
        console.log('SUCCESSSSS');
      })
      .catch((err, results) => console.log(err, results));
  };
  const showAlert = () => {
    alert('Match Added!');
  };
  return (
    <Grid item xs={4}>
      <Paper>
        <img src={ props.lessor.imageURL } className="img"/>
        <Box padding={1}>
          <Typography variant="h4" component="h1">
            { props.lessor.firstName }
          </Typography>
          <Typography variant="subtitle1" component="h3">
            { props.lessor.gender }
          </Typography>
          <Typography variant="subtitle1" component="h3">
            { props.lessor.age }
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button 
            onClick={() => {
              addLessor();
              props.removeLessor(props.lessor.email);
              showAlert();
            }}
            variant='outlined'
            sx={{ color: 'white', backgroundColor: '#2979ff', borderColor: 'black', fontfamily: 'Roboto' }}
          >
            Match
          </Button>
          <Button 
            onClick={() => props.removeLessor(props.lessor.email)}
            variant='outlined'
            sx={{ color: 'white', backgroundColor: '#2979ff', borderColor: 'black', fontfamily: 'Roboto' }}
          >
            Decline
          </Button> 
        </Box>
      </Paper>
    </Grid>
  );
};

export default Lessor;  