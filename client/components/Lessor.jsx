import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Lessor = (props) => {
  const addLessor = () => {
    axios.post('http://localhost:8000/matches', {
      matchRequestSender: props.user.email,
      matchRequestReceiver: props.lessor.email
    })
      .then((results) => {
        console.log('SUCCESSSSS');
      })
      .catch((err, results) => console.log(err, results));
  };
  const showAlert = () => {
    alert('Match Added!');
  };
  return (
    <div>
      { props.lessor.firstName }
      <br></br>
      { props.lessor.gender }
      <br></br>
      { props.lessor.age }
      <br></br>
      <img src={ props.lessor.imageURL }/>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => props.removeLessor(props.lessor.email)}>
        Decline.
      </button>
      <button onClick={ () => {
        addLessor();
        props.removeLessor(props.lessor.email);
        showAlert();
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

export default Lessor;  