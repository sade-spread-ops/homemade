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
    },
    attributes: { 
      exclude: ['phone', 'email'] 
    }
  })
    .then(users => {
      console.log('users on 18', users);
      res.sendStatus(200);
    })
    .catch(err => console.log(err)));

module.exports = router;
