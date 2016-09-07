'use strict';

const db = require('./_db');
const chalk = require('chalk');

const models = require('./models');

const Role = models.Role;
const User = models.User;

var syncedDbPromise = db.sync({ force: true });

var _role;

syncedDbPromise
.then(function() {
  return Role.create({
    name: 'superAdmin',
    isTeamAdmin: true,
    isLeagueAdmin: true
  })
})
.then(function(role) {
  _role = role;
  return User.create({
    email: 'kphurley@gmail.com',
    password: '123'
  })
})
.then(function(user) {
  return user.addRole(_role);
})
.then(function() {
  console.log(chalk.yellow('Postgres db synched and test admin added.'));
});

module.exports = syncedDbPromise;
