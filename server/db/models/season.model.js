'use strict';

var db = require('../db');
var Sequelize = require('sequelize');

//TODO START DATE, END DATE?

module.exports = db.define('season', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
