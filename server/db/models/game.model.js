'use strict';

var db = require('../_db');
var Sequelize = require('sequelize');

module.exports = db.define('game', {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
});
