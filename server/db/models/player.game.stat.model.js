'use strict';

var db = require('../_db');
var Sequelize = require('sequelize');

module.exports = db.define('player_game_stat', {
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
  boardPlayed: {
    type: Sequelize.INTEGER,
  },
  pointsScored: {
    type: Sequelize.INTEGER,
  }
});
