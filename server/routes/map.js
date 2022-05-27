const express = require ('express');
const router = express.Router();
const Listing = require('../../models/Listing.js');
const User = require('../../models/User.js');

router.get('/', (req, res) => {
  Listing.findAll().then((data) => {
    res.status(200).send(data);
  })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log(req.body);
  Listing.create({
    // id: 
    // userId: 
    description: req.body.description,
    imageURL: req.body.imageURL,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    address: req.body.address,
    price: req.body.price
  }).then((data) => {
    res.sendStatus(201);  
  })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

router.put('/', (req, res) => {
  console.log('This line ran', req.body);
  Listing.update({
    description: req.body.description,
    imageURL: req.body.imageURL,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    address: req.body.address,
    price: req.body.price
  }, { where: {
    userId: User.id
  }})
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

module.exports = router;