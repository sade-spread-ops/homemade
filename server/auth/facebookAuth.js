const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const { CLIENT_ID_HOMEMADE, CLIENT_SECRET_FB } = require('dotenv').config();
const port = require('../index.js');
const sequelize = require('sequelize');
const express = require('express');
const ejs = require('ejs');
//const findOrCreate()

const app = express();


passport.use(new FacebookStrategy({
  clientID: process.env.CLIENT_ID_HOMEMADE,
  clientSecret: process.env.CLIENT_SECRET_FB,
  callbackURL: `http://localhost:${port}/auth/facebook/homemade`
},

function(accessToken, refreshToken, profile, cb) {
//be sure to use facebookId from schema once Raymond includes it
//since we are using sequeize, I think the user needs to be defined in the pool?
  //User.findOrCreate({ where: { facebookId: profile.id }})
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

app.get('/auth/facebook',
  passport.authenticate('facebook')); 

  
app.get('/auth/facebook/homemade',
  passport.authenticate('facebook', { failureRedirect: '/login '}),
  function(req, res) {
    //successful authentication redirect home
    res.redirect('/homemade');
  }
);  



