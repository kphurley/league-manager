'use strict';

const router = require('express').Router();

const userRouter = require('./users/user.router');
const leagueRouter = require('./league/league.router');
const seasonRouter = require('./season/season.router');
const teamRouter = require('./team/team.router');

router.use('/users', userRouter);
router.use('/league', leagueRouter);
router.use('/season', seasonRouter);
router.use('/team', teamRouter);

module.exports = router;
