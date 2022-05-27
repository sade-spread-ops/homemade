import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  });

  return (
    <div>
      {/* {matches.map((match) => <Match match={match}/>)} */}
      <h1>hello</h1>
    </div>
  );

};

export default UserMatches;