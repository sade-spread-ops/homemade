const express = require('express');
const session = require('express-session');
const http = require('http');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const { router } = require('./routes/users.js');
require('dotenv').config();
require('./passport'); 
const { matchesRouter } = require('./routes/matches.js');
const { messagesRouter } = require('./routes/messageRouting.js');

const app = express();
app.use(session({secret: process.env.EXPRESS_SESSION_SECRET, resave: false, saveUninitialized: true})); // change to env variable 
app.use(passport.initialize());
app.use(passport.session());

// DB Connection
require('./database/connection');

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.use('/users', router);
app.use('/feed', require('./routes/feed.js'));
app.use('/matches', matchesRouter);
app.use('/listings', require('./routes/map'));
app.use('/messages', messagesRouter);



//**********************__AUTH ROUTES__*************************** */


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
  // console.log(req.user);
  res.send(req.user[0]);
});

// https://www.passportjs.org/concepts/authentication/logout/
app.get('/logout', (req, res) => {
  req.logout(() => res.redirect(process.env.CLIENT_URL));
});
//************************************************************** */


// GET ALL USERS
app.get('/users', (req, res) => {
  User.findAll().then((users) => {
    res.json(users);
  });
});

//GET ONE USER 
// app.get('users/:id')
app.get('/users/:id', (req, res) => {
  // console.log(req.body, 'req body on 93');
  //console.log(req.params);
  //  res.send('hello');
  User.findOne({ where: { id: req.params }}).then((user) => {
    res.json(user);
  });
  
});


// CREATE USER
app.post('/users', (req, res) => {
  //console.log(req.body, 'body here on 105');
  //res.send('hello');
  User.create(req.body).then((user) => {
    res.json(user);
  });
});

//users/:id/messages
// GET ALL messages WHERE userID = your id


const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`
  ✨ Server listening on :${process.env.PORT || port}`);
});
