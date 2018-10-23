'use strict';

function returnChallenge(req, res){
  res.status(200).send(req.body.challenge).end();
  console.log('Return challenge token. : ' + req.body.challenge);
}

module.exports = returnChallenge;
