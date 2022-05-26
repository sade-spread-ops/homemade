import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Map from './Map.jsx';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
import { CLIENT_URL } from '../config/keys.js';
import Profile from './Profile.jsx';



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
<<<<<<< HEAD
    console.log(user);//null
=======
    // console.log(user, '****');
>>>>>>> e137a1ba4036d0af891c2329cf7237dbec77e350
  }, []);
  
  return (
    <div className='welcome'>
      <Typography variant='h6' align='center'>{ user ? user.name : 'Hello 🦔 friend 🦔' }</Typography>
      { user 
        ? <div>
          <Navbar />
<<<<<<< HEAD
          {/* <Map /> */}
          <Profile user={user}/>
=======
          <Map user={user}/>
          {/* <Profile user={user}/> */}
>>>>>>> e137a1ba4036d0af891c2329cf7237dbec77e350
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