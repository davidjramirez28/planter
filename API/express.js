const dotenv = require('dotenv');
dotenv.config();
$port = process.env.PORT;

var express = require('express');
module.exports = function() {
  var app = express();
  app.use(express.json());
  app.set('port', $port);
  return app;
};