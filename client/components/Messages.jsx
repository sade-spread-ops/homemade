import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Messages = (props) => {

  //using useState hook to create variables that will hold the list of messages and update the same list of messages
  //with messagesSet. 
  //Not sure what the messages datatype will yet be, but setting a scaffolding for now
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  //WHEN COMPONENT MOUNTS, USER WILL BE ABLE TO SEE/GET ALL MESSAGES
  // //The useEffect hook should be used when some variable or property changes, and you need to update your component to reflect that change. A change could be an asynchronous request to an API or any other side effect
  // useEffect(() => {
  //   axios
  //   //Do we need the uri from googleAuth? This get request is to retrieve all the messages. 
  //     .get('http://localhost:8000/messages')
  //     .then((response) => {
  //       console.log(response);
  //       setMessages(response.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setError('Could not retrieve messages');
  //     })
  //   //using object shorthand to send get request to the provided url with given data
  //   return { messages, loaded };
  // });

  //getAllMessages


  return (
    // <div>
    //   <button onClick={() => setMessages('messages')}>Messages</button>
    //   <ul>
    //     {messages.map((msg) => (
    //       <li key={msg.id}>
    //         <h3>
    //           {}
    //         </h3>
    //         <p>{}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <h1>hello</h1>
  );
};

export default Messages;





/*
import axios from 'axios';
import { useEffect } from 'react';


export default function FakeMessages() {
  const [messages, setMessages] = useState([]);
  const [resourceType, setResourceType] = useState('');

  // //this is the general display of a user's messages that is rendered after a user clicks on the messages button
  // useEffect(() => {
  //   //unsure of whether or not it is a good idea to wrap axios in another function
  //   getAllMessages(){
  //     axios.get(`/auth/google/messages`)
  //      .then((data) => {
  //        console.log(data);
  //        data.json();
  //      })
  //      .catch((err) => {
  //        console.error(err);
  //      })
  //   };
      
  // });

  const useAxiosGetMessages = (url, )




  return (
    <div>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <h3>
              {}
            </h3>
            <p>{}</p>
          </li>
        ))}
      </ul>
      <button></button>
    </div>
  );
}
*/