import React, { useState } from 'react';
import axios from 'axios';

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
      <textarea onChange={(event) => handleChange(event)}></textarea>
      <br></br>
      <button 
        onClick={() => send()}>Send Message</button>
    </div>
  );
};

export default SendMessage;