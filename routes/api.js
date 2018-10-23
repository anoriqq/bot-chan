'use strict';

let router = require('./common');

const challenge = require('../lib/challenge');
const apiGET = require('../lib/apiGET');

router.get('/api', function (req, res, next) {
  console.log('GET: /api');
  res.end();
});

router.get('/api2', function (req, res, next) {
  console.log('GET: /api2');
  res.end();
});

router.post('/api', function (req, res, next) {
  console.log('POST: /api');
  res.end();
});

router.post('/api2', function (req, res, next) {
  console.log('POST: /api2');
  res.end();
});

module.exports = router;
