import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import axios from 'axios';
import { Button, Typography } from '@mui/material';


const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      const options = {
        url: 'http://localhost:8000/protected',
        method: 'GET',
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        }
      };
      axios(options)
        .then((res) => {
          if (res.status === 200) {
            return res;
          }
        })
        .then((resObj) => {
          console.log(resObj);
          setUser(resObj.data.firstName);
        })
        .catch((err) => console.error(err, '***ERROR***'));
    };
    getUser();
    // console.log(user);
  }, []);
  return (
    <div className='welcome'>
      <Typography variant='h6' align='center'>Hello { user ? user.name : '🦔 friend 🦔' }</Typography>
      { user 
        ? <a href={ 'localhost:8000/logout' }>
          <button>Logout</button></a> 
        : <Typography align='center' ><a href={ 'http://localhost:8000/auth/google' }>
          <Button variant="contained" color="primary" size='large' >
            Login with Google
          </Button></a></Typography>
      }
    </div>
  );
};

export default App;