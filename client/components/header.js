import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Map from './Map.jsx';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
import { CLIENT_URL } from '../config/keys.js';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@material-ui/core/IconButton';

function Header() {
  return (
    <div className="header">
      <h2>I am header</h2>
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon"/>
      </IconButton>
    </div>
  );
}

export default Header;