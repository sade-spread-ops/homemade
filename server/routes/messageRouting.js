const path = require('path');
const sequelize = require('sequelize');
const http = require('http');
const axios = require('axios');
//const router = require('express').Router;
const User = require('../../models/User');
const UserMessage = require('../../models/UserMessage');
const Message = require('../../models/Message');

const express = require ('express');
const router = express.Router();
const db = require ('../database/connection.js');


//FIGURE OUT HOW TO CONNECT TO SEQUELIZE DATABASE TO BEGIN MAKING REQUESTS

const app = express();

/*
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(DIST_DIR));
*/

//USER SHOULD BE ABLE TO SEE ALL MESSAGES IN THEIR INBOX. THIS WILL BE A GET REQUEST
//'http://127.0.0.1.8000/auth/google/messages'?

router.get('/messages', (req, res) => {
  //trying to use User model to access all of the User's messages. There is no Messages column in the User table however
  //first thing we gotta do is console.log the req
  //console.log(req);
  // UserMessage.findAll({where: {}//returns a promise that resolves to an array of instances
  // })
  //   .then(({ data }) => {
  //     console.log(data);
  //     res.sendStatus(200);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.sendStatus(500);
  //   });

});


//USER SHOULD BE ABLE TO SELECT A SPECIFIC MESSAGE FROM MESSAGES

router.get('/messages:id', (req, res) => {
  console.log(req.params);
  Message.findOne({ attributes: ['message', 'timeSent', 'recepientId'],
    where: {}})
    .then((data) => {
      console.log(data);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

//USER SHOULD BE ABLE TO WRITE A MESSAGE TO ANOTHER USER IF THEY HAVE MATCHED. POST REQUEST

router.post('/messages', (req, res) => {
  //create new message by first accessing the right message object from database
  // console.log(req); 
  // //https://sequelize.org/docs/v6/core-concepts/model-instances/
  // Message.build({})
  //   .then((data) => {
  //     res.sendStatus(201);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     res.sendStatus(500);
  //   });
});



//USER SHOULD BE ALLOWED TO DELETE A MESSAGE FROM THEIR INBOX. DELETE REQUEST

router.delete('/messages/:id', (req, res) => {
  //console.log(req.params);
  // Message.destroy({where: {

  // }})
  //   .then((data) => {
  //     res.sendStatus(200);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.sendStatus(500);
  //   });
});

