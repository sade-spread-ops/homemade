import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Match from './Match.jsx';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const UserMatches = (props) => {
  const [matches, setMatches] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/matches', {
      params: {
        email: props.user.email
      }
    })
      .then((results) => {
        setMatches(results.data);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, []);

  return (
    <Container sx={{
      marginY: 5
    }}
    >
      <Grid container spacing={5}>
        {matches.map((match, i) => <Match 
          key={i}
          match={match}
          user={props.user}
        />)}
      </Grid>
    </Container>
  );

};

export default UserMatches;