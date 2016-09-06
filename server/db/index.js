'use strict';

const db = require('./db');
const chalk = require('chalk');

require('./models');

var syncedDbPromise = db.sync({ force: true });

syncedDbPromise.then(function () {
  console.log(chalk.green('Sequelize models synced to PostgreSQL'));
});

module.exports = syncedDbPromise;
