const express = require ('express');
const router = express.Router();
const db = require ('../database/connection.js');
const { User } = require('../../models/User.js');

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


router.get('/users', (req, res) => {
  // console.log(req.body, 'req body on 93');
  console.log(req.params);
  res.send('hello');
  // User.findOne({ where: { email: req.params }}).then((user) => {
  //   res.json(user);
  // });
  
});

module.exports = {
  router,
 
}; 