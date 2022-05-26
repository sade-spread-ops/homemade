const express = require ('express');
const router = express.Router();
const Listing = require('../../models/Listing.js');

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

module.exports = router;