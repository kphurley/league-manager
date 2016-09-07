'use strict';

var db = require('../db');
var Sequelize = require('sequelize');

module.exports = db.define('team_game_stat', {
  didWin: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  didLose: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  didDraw: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  pointsScored: {
    type: Sequelize.INTEGER,
  }
});
