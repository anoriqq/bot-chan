'use strict';

let router = require('./common');

const challenge = require('../lib/challenge');
const apiGET = require('../lib/apiGET');

router.post('/api', function (req, res, next) {
  console.log('POST: /api');
  if (challenge in req.body) {
    challenge(req, res);
  }
});

module.exports = router;
