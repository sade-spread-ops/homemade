const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
// const test = require('./database/connection');
const sequelize = require('sequelize');
const User = require('../models/User');


const GOOGLE_CLIENT_ID = '710273950950-qt5p26dv9uir7decn8l9tfhmbhgee6rh.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';



passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:8000/google/callback',
  passReqToCallback: true
},
function(request, accessToken, refreshToken, profile, done) {
  // console.log(profile);
  User.findOrCreate({ where: {
    googleId: profile.id,
    email: profile.email,
    firstName: profile.given_name,
    lastName: profile.family_name,
    imageUrl: profile.picture
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

