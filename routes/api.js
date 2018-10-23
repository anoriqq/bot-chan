'use strict';

const challenge = require('../lib/challenge');
const apiGET = require('../lib/apiGET');
let router = require('./common');

router.get('/api',function(req, res, next){
  console.log('GET: /api');
  apiGET(req, res);
});

router.post('/api', function(req, res, next){
  console.log('POST: /api');
  if(challenge in req.body){
    challenge(req, res);
  }
});

module.exports = router;
