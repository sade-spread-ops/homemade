import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import { Typography } from '@mui/material';
//import Messages from './Messages.jsx';

const App = () => (
  <div>
    <Navbar />
    <Typography variant='h1'>
      App Component
    </Typography>
  </div>
);

export default App;