const express = require('express');
const session = require('express-session');
const http = require('http');
const helmet = require('helmet');
const path = require('path');
const morgan = require('morgan');

require('./auth'); 

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

// const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
// const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = require('dotenv');

const app = express();
app.use(session({secret: 'cats'})); // change to env variable 
app.use(passport.initialize());
app.use(passport.session());


// DB Connection
require('./database/connection');

// security - XSS protection and remove default headers
app.use(helmet());
// logs http req in terminal
app.use(morgan('tiny'));

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/auth', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile']})
);

app.get('/google/callback', 
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure'
  })
);

app.get('/auth/failure', (req, res) => {
  res.send('Something went wrong...');
});

app.get('/protected', isLoggedIn, (req, res) => {
  console.log(req.user);
  res.send(`Hello ${req.user.displayName}`);
});


// https://www.passportjs.org/concepts/authentication/logout/
app.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) { return next(err); }
    // res.redirect('/');
  });
  // req.session.destroy();
  res.send('Goodbye!');
});



const port = 8000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`
  ✨ Server listening on :${port}`);
});