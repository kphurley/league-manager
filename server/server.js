'use strict';

const chalk = require('chalk');
const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

app.use(logger('dev'));

const rootPath = path.join(__dirname, '..');
const publicPath = path.join(rootPath, 'public');

app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', require('./api'));

var startDb = require('./db');

function startServer () {
  var port = 1234;
  app.listen(port, function(){
    console.log(chalk.yellow('Listening on port ' + port));
  })
}

startDb
.then(startServer)
.catch(function (err) {
  console.log(chalk.red(err.stack));
  process.exit(1);
});

