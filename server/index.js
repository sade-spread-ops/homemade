const express = require('express');
const http = require('http');
const helmet = require('helmet');
const path = require('path');
const morgan = require('morgan');

const app = express();

// security - XSS protection and remove default headers
app.use(helmet());
// logs http req in terminal
app.use(morgan('tiny'));

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/dist')));

const PORT = 8701;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`
  Server listening on 
  http://localhost:${PORT}`);
});