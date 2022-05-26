

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