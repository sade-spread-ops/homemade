import React, { useEffect, useState } from 'react';
const axios = require('axios');



const Lessee = (props) => {
  const addLessee = () => {
    axios.post('http://localhost:8000/matches', {
      matchRequestSender: props.user.email,
      matchRequestReceiver: props.lessee.email
    })
      .then((results) => {
        console.log('SUCCESSSSS');
      })
      .catch((err, results) => console.log(err, results));
  };
  return (
    <div>
      { props.lessee.firstName }
      <br></br>
      { props.lessee.gender }
      <br></br>
      { props.lessee.age }
      <br></br>
      <img src={ props.lessee.imageURL }/>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => props.removeLessee(props.lessee.email)}>
        Decline.
      </button>
      <button onClick={ () => {
        addLessee();
        props.removeLessee(props.lessee.email); 
      } }>
        Match!
      </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
};

export default Lessee;  