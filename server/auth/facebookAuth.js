const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const { CLIENT_ID_HOMEMADE, CLIENT_SECRET_FB } = require('dotenv').config();
const port = require('../index.js');
const sequelize = require('sequelize');
const express = require('express');
const ejs = require('ejs');
const { User } = require('../models/User.js');


const app = express();

//CONFIGURATION STRATEGY
passport.use(new FacebookStrategy({
  //clientID: process.env.CLIENT_ID_HOMEMADE,
  clientID: '703074234080504',
  //clientSecret: process.env.CLIENT_SECRET_FB,
  clientSecret: 'd53137fb081bc3d62eddc550bc37c6f8',
  callbackURL: `https://localhost:${port}/auth/facebook/homemade`
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

//AUTHENTICATE REQUEST
app.get('/auth/facebook',
  passport.authenticate('facebook')); 

  
app.get('/auth/facebook/homemade',
  passport.authenticate('facebook', { failureRedirect: '/login '}),
  function(req, res) {
    //successful authentication redirect home
    res.redirect('/homemade');
  }
);  



/*
  <script>
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1403978246709193',
        cookie     : true,
        xfbml      : true,
        version    : 'v13.0'
      });
        
      FB.AppEvents.logPageView();   
        
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>
*/