import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const SendMessage = (props) => {

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const send = () => {
    axios.post('http://localhost:8000/messages', {
      senderId: props.user.id,
      recipientId: props.recipient.id,
      message: message
    })
      .then(() => {
        console.log('Message Sent');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Box sx={{
        marginY: 1
      }}
      >
        <textarea rows="4" cols="50" onChange={(event) => handleChange(event)}></textarea>
      </Box>
      <br></br>
      <Box 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button 
          onClick={() => send()}
          variant='outlined'
          sx={{ color: 'white', backgroundColor: '#2979ff', borderColor: 'black', fontfamily: 'Roboto' }}
        >
          Send Message
        </Button>
      </Box>
    </div>
  );
};

export default SendMessage;