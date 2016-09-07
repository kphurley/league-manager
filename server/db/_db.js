'use strict';

const Sequelize = require('sequelize');
const chalk = require('chalk');

const DB_URL = 'postgres://localhost:5432/leaguemanager';

console.log(chalk.yellow('Opening connection to PostgreSQL'));

module.exports = new Sequelize(DB_URL);
