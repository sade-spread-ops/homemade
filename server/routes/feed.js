const express = require('express');
const router = express.Router();
const db = require ('../database/connection.js');
const sequelize = require('sequelize');
const { User } = require('../../models/User.js');

//get
router.get('/', (req, res) =>
  User.findAll({
    where: {
      lessee: true
    }
  })
    .then(users => {
      console.log('users on 18', users);
      res.status(200).send(users);
    })
    .catch(err => console.log(err)));

module.exports = router;
