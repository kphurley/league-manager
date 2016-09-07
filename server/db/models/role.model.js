'use strict';

var db = require('../db');
var Sequelize = require('sequelize');

module.exports = db.define('role', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isTeamAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  isLeagueAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});
