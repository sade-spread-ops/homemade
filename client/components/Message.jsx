import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SendMessage from './SendMessage.jsx';



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
    <div className="message">
      {`${sender.firstName} ${sender.lastName}`}
      {props.msg.message}
      <button onClick={() => props.deleteMessage(props.msg.id)}>Delete</button>
      <button onClick={() => revealMessage()}>Reply</button>
      {sendMessageRevealed && <SendMessage user={props.user} recipient={sender}/>}
    </div>
  );
};

export default Message;