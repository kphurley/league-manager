'use strict';

var db = require('../db');
var Sequelize = require('sequelize');

//TODO HASH PASSWORDS

module.exports = db.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

