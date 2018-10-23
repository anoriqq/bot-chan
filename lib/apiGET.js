'use strict';

function apiGET(req, res){
  res.status(200).send(req.body).end();
  console.log(req.body);
}

module.exports = apiGET;
