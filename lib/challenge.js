'use strict';

function returnChallenge(req, res){
  res.status(200).end();
  console.log('Return challenge token.');
}

module.exports = returnChallenge;
