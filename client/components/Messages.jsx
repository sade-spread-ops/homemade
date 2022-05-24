import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Messages () => {

  //using useState hook to create variables that will hold the list of messages and update the same list of messages
  //with messagesSet. 
  //Not sure what the messages datatype will yet be, but setting a scaffolding for now
  const [messages, setMessages] = useState([]);
  //const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  //The useEffect hook should be used when some variable or property changes, and you need to update your component to reflect that change. A change could be an asynchronous request to an API or any other side effect
  useEffect(() => {
     axios
     //Need the uri from googleAuth
     .get('')
     .then((response) => {
       console.log(response);
      setMessages(response.data)
     })
     .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      setLoaded(true);
    }, []);
    //using object shorthand to send get request to the provided url with given data
    return { messages, loaded };
  })

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
    </div>
  );
}

export default Messages;