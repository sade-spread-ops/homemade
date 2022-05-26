const express = require ('express');
const router = express.Router();
const db = require ('../database/connection.js');
const Users = require('');

router.put('/', (req, res) => {
  console.log('This line ran', req.body);
  User.update({
    phone: req.body.phone,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    gender: req.body.gender,
    lessee: req.body.lessee,
    lessor: req.body.lessor,
    imageURL: req.body.imageURL
  }, {
    where: {
      email: req.body.email
    }
  })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

module.exports = {
  router
};