const router = require('express').Router();
const User = require('../models/User');



router.get('/user', (req, res) => {
  // console.log(req, res);
  User.findAll().then((data) => {
    console.log(data);
    res.status(200).send(data);
  })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});



module.exports = router;