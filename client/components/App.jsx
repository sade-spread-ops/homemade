import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import { Typography } from '@mui/material';
const App = () => (
  <div>
    <NavBar />
    <Typography variant='h1'>
      App Component
    </Typography>
  </div>
);

export default App;