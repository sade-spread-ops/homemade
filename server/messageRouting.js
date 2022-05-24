const path = require('path');
const sequelize = require('sequelize');
const http = require('http');
const axios = require('axios');
const router = require('express').Router;
const User = require('../models/User');


//FIGURE OUT HOW TO CONNECT TO SEQUELIZE DATABASE TO BEGIN MAKING REQUESTS

const app = express();

/*
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(DIST_DIR));
*/

//USER SHOULD BE ABLE TO SEE ALL MESSAGES IN THEIR INBOX. THIS WILL BE A GET REQUEST
//'http://127.0.0.1.8000/auth/google/messages'?
router.get('http://127.0.0.1:8000/', (req, res) => {
  //trying to use User model to access all of the User's messages. There is no Messages column in the User table however
  // UserMessage.findAll({where: {
  //   userId:   //the id of the user submitting the get request
  // }});

});

//USER SHOULD BE ABLE TO SELECT A SPECIFIC MESSAGE FROM MESSAGES


//USER SHOULD BE ABLE TO WRITE A MESSAGE TO ANOTHER USER IF THEY HAVE MATCHED. POST REQUEST


//USER SHOULD BE ALLOWED TO DELETE A MESSAGE FROM THEIR INBOX. DELETE REQUEST

