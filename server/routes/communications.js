const express = require('express');
const communicationsRouter = express.Router();
const db = require('../database/connection.js');
const { User } = require('../../models/User.js');

communicationsRouter.get('/', (req, res) => {
  User.findOne({
    where: {
      id: req.query.id
    }
  })
    .then((user) => {
      res.status(200);
      res.send(user);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = {
  communicationsRouter
};
