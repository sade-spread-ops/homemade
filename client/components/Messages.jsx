import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Message from './Message.jsx';

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
   
    return { messages };
  }, []);

  return (
    <div>
      {/* <button onClick={() => setMessages('messages')}>Messages</button> */}
      <ul>
        {messages.map((msg) => <Message msg={msg}/>)}
      </ul>
    </div>
  );
};

export default Messages;
