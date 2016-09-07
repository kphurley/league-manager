'use strict';

const chalk = require('chalk');
const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const User = require('./db/models').User;

app.use(logger('dev'));

const rootPath = path.join(__dirname, '..');
const publicPath = path.join(rootPath, 'public');
const browserPath = path.join(rootPath, 'browser');

app.use(express.static(publicPath));
app.use(express.static(browserPath));

//TODO ----FOR DEV ONLY-----SERVE THESE MORE SECURELY
const nodeModulesPath = path.join(rootPath, 'node_modules');
app.use(express.static(nodeModulesPath));
//--------------------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
  secret: 'qwertyuiop',
  resave: false,
  saveUninitialized: false
}));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id)
  .then(function (user) {
    done(null, user);
  })
  .catch(done);
});

app.use(passport.initialize());

app.use(passport.session());

app.use('/api', require('./api'));

app.use('/auth', require('./auth/auth.router'));


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

