import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Profile from './Profile.jsx';
import Feed from './Feed.jsx';
import UserMatches from './UserMatches.jsx';
import Messages from './Messages.jsx';
import Map from './Map.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import axios from 'axios';
import { Button, Typography } from '@mui/material';
import { CLIENT_URL } from '../config/keys.js';



const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      const options = {
        url: '/protected',
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
          console.log(data);
          setUser(data);
        })
        .catch((err) => console.error(err, '***ERROR***'));
    };
    getUser();
  }, []);

  return (
    <div className='welcome'>
      <Typography variant='h6' align='center'>{ user ? user.name : 'Hello 🦔 friend 🦔' }</Typography>
      { user
        ?
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Profile user={user} />} />
              <Route exact path='/feed' element={<Feed user={user}/>} />
              <Route exact path='/matches' element={<UserMatches user={user}/>} />
              <Route exact path='/messages' element={<Messages/>} />
              <Route exact path='/map' element={<Map user={user} />} />
            </Routes>
          </div>
        </Router>
        : <Typography align='center' ><a href={ `${CLIENT_URL}/auth/google` }>
          <Button variant="contained" color="primary" size='large' >
            Login with Google
          </Button></a></Typography>
      }
    </div>
  );
};

export default App;