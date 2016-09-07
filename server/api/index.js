'use strict';

const router = require('express').Router();

const userRouter = require('./users/user.router');
const leagueRouter = require('./league/league.router');

router.use('/users', userRouter);
router.use('/league', leagueRouter);

module.exports = router;
