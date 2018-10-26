'use strict';

let router = require('./common');

const challenge = require('../lib/challenge');
const channelMessage = require('../lib/channel_message');

router.get('/api', function (req, res, next) {
  // "~/api" にGETが来たとき
  console.log('GET: /api');
  res.end();
});

router.get('/api2', function (req, res, next) {
  // "~/api2" にGETが来たとき
  console.log('GET: /api2');
  res.end();
});

router.post('/api', function (req, res, next) {
  // "~/api" にPOSTが来たとき
  console.log('POST: /api');
  if(req.body.challenge){
    // challengeキーがあるとき
    challenge(req, res);
  }else if(!req.body.event.bot_id && req.body.event.text){
    // botの投稿じゃないとき && textがあるとき
    channelMessage(req, res);
  }else{
    console.log('例外のPOST');
    res.status(200).end();
  }
});

router.post('/api2', function (req, res, next) {
  // "~/api2" にPOSTが来たとき
  console.log('POST: /api2');
  res.end();
});

module.exports = router;
