'use strict';

var db = require('../_db');
var Sequelize = require('sequelize');

//TODO HASH PASSWORDS

module.exports = db.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

