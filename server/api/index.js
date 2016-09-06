'use strict';

var router = require('express').Router();

//WORKS
router.use('/', function(req, res, next) {
  res.json({ hi: 'there'});
});

module.exports = router;
