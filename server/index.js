const express = require('express');
const http = require('http');
const helmet = require('helmet');
const path = require('path');


const app = express();
const PORT = 8701;


app.use(helmet());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/dist')));

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`
  Server listening on 
  http://localhost:${PORT}`);
});