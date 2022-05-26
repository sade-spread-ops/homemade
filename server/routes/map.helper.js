const coordinates = require('express').Router();
// const coordinates = Router();
const axios = require('axios');
require('dotenv').config();

getLongLatData = (address) => {
  address = address.split(' ').join('%20');
  const TOKEN = process.env.MAPBOX_TOKEN;
  const options = {
    method: 'GET',
    url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${TOKEN}`
  };

  return axios(options);
};
coordinates.get('/', (req, res) => {
  getLongLatData('808 Lurline Dr New Orleans LA 70121')
    .then(data => {
      const { center } = data.data.features[0];
      console.log(data.data.features[0].center);
      res.status(200).send(center);
    })
    .catch(e => {
      console.error(e);
      res.sendStatus(500);
    });
});

module.exports = coordinates;

// console.log(getLongLatData('808 Lurline Dr New Orleans LA 70121'));