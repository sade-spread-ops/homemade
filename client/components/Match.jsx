import React from 'react';
import { useEffect, useState } from 'react'; 
import axios from 'axios';
import Messages from './Messages.jsx';
import SendMessage from './SendMessage.jsx';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Match = (props) => {

  const [recipient, setRecipient] = useState({});
  const [sendMessageRevealed, setSendMessageRevealed] = useState(false);

  const revealOrHideMessage = () => {
    setSendMessageRevealed(!sendMessageRevealed);
  };

  useEffect(() => {
    axios.get('http://localhost:8000/users', {params: { email: props.match.matchRequestSender }})
      .then((results) => {
        //console.log(results, 'results on 9');
        setRecipient(results.data);
      })
      .catch((err) => {
        console.error(err);
      });  
  }, []);

  

  return (
    <Grid item xs={4}>
      <Paper>
        <img src={recipient.imageURL} className="img" onClick={() => revealOrHideMessage()}/>
        <Box padding={1}>
          <Typography variant="h4" component="h1" onClick={() => revealOrHideMessage()}>
            {`${recipient.firstName} ${recipient.lastName}`}
          </Typography>
          <Typography variant="subtitle1" component="h3" onClick={() => revealOrHideMessage()}>
            {`${recipient.gender}`}
          </Typography>
          <Typography variant="subtitle1" component="h3" onClick={() => revealOrHideMessage()}>
            {`${recipient.age}`}
          </Typography>
        </Box>
        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {sendMessageRevealed && <SendMessage user={props.user} recipient={recipient}/>}
        </Box>
      </Paper>
    </Grid>
  );
};

export default Match;
