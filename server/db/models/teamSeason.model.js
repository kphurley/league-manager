//THIS IS JUST A JOIN TABLE BETWEEN TEAMS AND SEASONS
//NEEDS TO BE A MODEL THOUGH SINCE SEQUELIZE DOES NOT APPEAR
//TO SUPPORT THREE-WAY JOINS

'use strict';

var db = require('../_db');
var Sequelize = require('sequelize');

module.exports = db.define('teamSeason', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
