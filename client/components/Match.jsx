import React from 'react';
import { useEffect, useState } from 'react'; 
import axios from 'axios';
import Messages from './Messages.jsx';

const Match = (props) => {

  const [match, setMatch] = useState({});
  

  useEffect(() => {
    axios.get('http://localhost:8000/users', {params: { email: props.match.matchRequestSender }})
      .then((results) => {
        //console.log(results, 'results on 9');
        setMatch(results.data);
      })
      .catch((err) => {
        console.error(err);
      });  
  } 
  );

  

  return (
    <div>
      <h1 onClick={()=> {}}>
        {`${match.firstName} ${match.lastName}`}
      </h1>
    </div>
  );
};

export default Match;
