import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Message from './Message.jsx';
import { Container, Grid } from '@mui/material';


const Messages = (props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
    //Querying for a specific user's messages
      .get('http://localhost:8000/messages', {params: {recipientId: props.user.id}})
      .then((results) => {
        console.log(results, 'results on 20');
        setMessages(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const deleteMessage = (id) => {
    axios.delete('http://localhost:8000/messages', {
      data: {
        id: id
      }
    })
      .then(() => {
        axios.get('http://localhost:8000/messages', {
          params: {
            recipientId: props.user.id
          }
        })
          .then((results) => {
            setMessages(results.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container sx={{
      marginY: 5
    }}
    >
      <Grid container spacing={5}>
        {/* <button onClick={() => setMessages('messages')}>Messages</button> */}
        {messages.map((msg) => <Message user={props.user} msg={msg} deleteMessage={deleteMessage} />)}
      </Grid>
    </Container>
  );
};

export default Messages;
