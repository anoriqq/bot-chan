'use strict';
const http = require('http');
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const OAUTH_ACCESS_TOKEN = process.env.OAUTH_ACCESS_TOKEN;
const BOT_USER_OAUTH_ACCESS_TOKEN = process.env.BOT_USER_OAUTH_ACCESS_TOKEN;

app.set('port', (process.env.PORT || 8000));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', function (req, res) {
  res.status(200).send('Hello World!');
});

app.post('/api', function (req, res) {
  console.log(req.body);
  if(req.body.challenge !== undefined){
    res.status(200).send(req.body.challenge).end();
  }
  if (req.body.event.user == 'UAE9Z2JUF') {
    request.post({
      url: 'https://slack.com/api/chat.postMessage',
      form: { token: BOT_USER_OAUTH_ACCESS_TOKEN, channel: req.body.event.channel, text: req.body.event.text }
    },
      function (err, httpResponse, body) {
        console.log(body);
      })
  }
  req.end();
})

app.listen(app.get('port'), function () {
  console.log('Node app is running at localhost:' + app.get('port'));
})
