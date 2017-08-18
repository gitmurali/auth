// Main starting point of applicaiton
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');

//App setup
//morgan and body-parser are middleware in express
//morgan is a logging framework.
//body-parser will parse any incomming request as json.
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
router(app);

//Server setup
const port = process.env.port || 3001;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on: ', port);
