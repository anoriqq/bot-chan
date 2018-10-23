'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
  console.log('GET: /');
  res.status(200).send('GET: /').end();
});

module.exports = router;
