
const axios = require('axios');
const { useEffect, useState } = require('react');
import React from 'react';
import Match from './Match.jsx';

const UserMatches = (props) => {
  const [matches, setMatches] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/matches', {
      params: {
        email: 'velouriagreen@gmail.com'
      }
    })
      .then((results) => {
        setMatches(results.data);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  });

  return (
    <div>
      {/* {matches.map((match) => <Match match={match}/>)} */}
      <h1>hello</h1>
    </div>
  );

};

export default UserMatches;