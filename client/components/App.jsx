import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Map from './Map.jsx';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
import { CLIENT_URL } from '../config/keys.js';
import Profile from './Profile.jsx';
import Feed from './Feed.jsx';
import UserMatches from './UserMatches.jsx';



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
          if (res.status === 200) { return res; }
        })
        .then(({ data }) => { // <-- data = userObject
          console.log(data, '&&&&&&&&');
          setUser(data);
        })
        .catch((err) => console.error(err, '***ERROR***'));
    };
    getUser();
    // console.log(user, '****');
  }, []);

  return (
    <div className='welcome'>
      <Typography variant='h6' align='center'>{ user ? user.name : 'Hello 🦔 friend 🦔' }</Typography>
      { user
        ? <div>
          <Navbar />
          <Map user={user}/>
          {/* <Profile user={user}/> */}
          {/* <UserMatches user={user}/> */}
        </div>

        : <Typography align='center' ><a href={ `${CLIENT_URL}/auth/google` }>
          <Button variant="contained" color="primary" size='large' >
            Login with Google
          </Button></a></Typography>
      }
    </div>
  );
};

export default App;