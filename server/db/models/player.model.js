'use strict';

var db = require('../_db');
var Sequelize = require('sequelize');

//TODO - ADDRESSES?  PHONE NUMBERS?

module.exports = db.define('player', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});
