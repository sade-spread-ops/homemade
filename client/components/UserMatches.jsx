import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserMatches = (props) => {
  const [matches, setMatches] = useState([]);
  
  useEffect(() => {
    axios.get('/matches', {
      params: {
        email: props.user.email
      }
    })
      .then((results) => {
        setMatches(matches = results);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  });

  return (
    <div>
      {matches.map((match) => <Match match={match}/>)}
    </div>
  );

};

export default UserMatches;