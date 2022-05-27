const express = require('express');
const matchesRouter = express.Router();
const db = require ('../database/connection.js');
const sequelize = require('sequelize');
const { Match } = require('../../models/Match.js');

//ROUTE TO CREATE A MATCH
matchesRouter.post('/', (req, res) => {
  Match.create({
    matchRequestSender: req.body.matchRequestSender,
    matchRequestReceiver: req.body.matchRequestReceiver
  })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
    });
});

//ROUTE TO GET ALL MATCHES
matchesRouter.get('/', (req, res) => {
  Match.findAll({
    where: {
      matchRequestReceiver: req.query.email
    }
  })
    .then((results) => {
      res.status(200);
      res.send(results);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(404);
    });
});

matchesRouter.delete('/', (req, res) => {
  // console.log(req.query.matchRequestSender, 'query email on 39');
  // res.send('hello');
  Match.destroy({ where: {
    matchRequestSender: req.query.matchRequestSender
  }})
    .then((data) => {
      // console.log(data, 'data on 45');
      res.sendStatus(204);
      
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});





module.exports = {
  matchesRouter
};  
