const express = require('express');
const http = require('http');
const helmet = require('helmet');
const path = require('path');
const morgan = require('morgan');
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = require('dotenv');

const app = express();

// DB Connection
require('./database/connection');

// security - XSS protection and remove default headers
app.use(helmet());
// logs http req in terminal
app.use(morgan('tiny'));

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/dist')));



const port = 8000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`
  Server listening on :${port}`);
});

module.exports = {
  port
};