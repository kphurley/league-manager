'use strict';

var db = require('../db');
var Sequelize = require('sequelize');

module.exports = db.define('league', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
