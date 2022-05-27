import React, { useState } from 'react';

const Match = (props) => {

  const [match, setMatch] = useState({});
  

  useEffect(() => {
    axios.get('http://localhost:8000/users', {params: { email: props.match.matchRequestSender }})
      .then((results) => {
        console.log(results, 'results on 9');
        setMatch(results);
      })
      .catch((err) => {
        console.error(err);
      });  
  } 
  );
//     {`${props.match.firstName} ${props.match.lastName}`}

  return (
    <div>
      <h1>hello</h1>
      
    </div>
  );
};

export default Match;