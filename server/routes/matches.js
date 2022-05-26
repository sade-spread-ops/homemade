const express = require('express');
const matchesRouter = express.Router();
const db = require ('../database/connection.js');
const sequelize = require('sequelize');
const { Match } = require('../../models/Match.js');

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

module.exports = {
  matchesRouter
};


const { Match } = require('../../models/Match.js');
const express = require('express');
const matchesRouter = express.Router();

matchesRouter.get('/', (req, res) => {
  Match.findAll({
    where: {
      matchRequestReceiver: req.params.email
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
