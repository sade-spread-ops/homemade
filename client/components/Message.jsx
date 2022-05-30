import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SendMessage from './SendMessage.jsx';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';




const Message = (props) => {

  const [sender, setSender] = useState({});
  const [sendMessageRevealed, setSendMessageRevealed] = useState(false);

  const revealMessage = () => {
    setSendMessageRevealed(!sendMessageRevealed);
  };

  useEffect(() => {
    console.log(props.msg.senderId);
    axios.get('http://localhost:8000/communications', {
      params: {
        id: props.msg.senderId
      }
    })
      .then((results) => {
        // console.log(results);
        setSender(results.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid item xs={4}>
      <Paper>
        <Box padding={1}>
          <Typography variant="h4" component="h1">
            {`${sender.firstName} ${sender.lastName}`}
          </Typography>
          <img src={`${sender.imageURL}`} className="img" />
          <Typography variant="subtitle1" component="h3">
            {props.msg.message}
          </Typography>
        </Box>
        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginY: 3
          }}
        >
          <Button 
            onClick={() => revealMessage()}
            variant='outlined'
            sx={{ color: 'white', backgroundColor: '#2979ff', borderColor: 'black', fontfamily: 'Roboto' }}
          >
            Reply/Cancel
          </Button>
          <Button 
            onClick={() => props.deleteMessage(props.msg.id)}
            variant='outlined'
            sx={{ color: 'white', backgroundColor: '#2979ff', borderColor: 'black', fontfamily: 'Roboto' }}
          >
            Delete
          </Button>
        </Box>
        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {sendMessageRevealed && <SendMessage user={props.user} recipient={sender}/>}
        </Box>
      </Paper>
    </Grid>
  );
};

export default Message;