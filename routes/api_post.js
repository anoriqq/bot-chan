'use strict';

let router = require('./common');

const challenge = require('../lib/challenge');

router.post('/api', function(req, res){
  console.log('POST: /api');
  if (challenge in req.body){
    challenge(req, res);
  }
});

module.exports = router;
