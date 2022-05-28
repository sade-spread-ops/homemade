import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Match from './Match.jsx';

const UserMatches = (props) => {
  const [matches, setMatches] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/matches', {
      params: {
        email: props.user.email
      }
    })
      .then((results) => {
        setMatches(results.data);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, []);

  return (
    <div>
      {matches.map((match, i) => <Match 
        key={i}
        match={match}
        user={props.user}
      />)}
      
    </div>
  );

};

export default UserMatches;