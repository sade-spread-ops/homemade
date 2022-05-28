import axios from 'axios';
import React, { useState, useEffect } from 'react';



const Message = (props) => {

  const [sender, setSender] = useState('');

  useEffect(() => {
    console.log(props.msg.senderId);
    axios.get('http://localhost:8000/communications', {
      params: {
        id: props.msg.senderId
      }
    })
      .then((results) => {
        // console.log(results);
        setSender(`${results.data.firstName} ${results.data.lastName}`);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="message">
      {sender}
      {props.msg.message}
      <button onClick={() => props.deleteMessage(props.msg.id)}>Delete</button>
      <button>Reply</button>
    </div>
  );
};

export default Message;