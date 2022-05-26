const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const sequelize = require('sequelize');
const { User } = require('../models/User');
require('dotenv').config();


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.CLIENT_URL}/google/callback`,
  passReqToCallback: true
},
function(request, accessToken, refreshToken, profile, done) {
  // console.log(profile);
  User.findOrCreate({ where: {
    googleId: profile.id,
    email: profile.emails[0].value,
    firstName: profile.given_name,
    
  }})
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      return done(new Error(err, 'Internal Server Error'));
    });
  
}
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

