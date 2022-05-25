const express = require('express');
const session = require('express-session');
const http = require('http');
const helmet = require('helmet');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
require('dotenv').config();
require('./passport'); 

const app = express();
app.use(session({secret: process.env.EXPRESS_SESSION_SECRET, resave: false, saveUninitialized: true})); // change to env variable 
app.use(passport.initialize());
app.use(passport.session());

// DB Connection
require('./database/connection');

// security - XSS protection and remove default headers
app.use(helmet());
// logs http req in terminal
app.use(morgan('dev'));

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/dist')));

//**************************************************************** */
//*     __AUTH ROUTES__
const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};
app.get('/auth/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      message: 'success',
      success: true,
      user: req.user
    });
  }
});

app.get('/auth', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile']})
);

app.get('/google/callback', 
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/auth/failure'
  })
);

app.get('/auth/failure', (req, res) => {
  res.send('Something went wrong...<a href="/auth/google"> Please try again</a>');
});

app.get('/protected', isLoggedIn, (req, res) => {
  console.log(req.user);
  res.send(req.user[0]);
});

// https://www.passportjs.org/concepts/authentication/logout/
app.get('/logout', (req, res) => {
  req.logout(() => res.redirect(process.env.CLIENT_URL));
});
//************************************************************** */


const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`
  ✨ Server listening on :${process.env.PORT || port}`);
});
