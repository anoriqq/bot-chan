'use strict';
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
  let headers = {
    'Content-Type': 'application/json'
  }
  let options = {
    url: 'https://slack.com/api/chat.postMessage',
    method: 'POST',
    headers: headers,
    json: true,
    form: {
      'channel': req.body.event.channel,
      'text': req.body.event.text
    }
  }
  console.log(options);
  request(options, function (error, response, body) {
    console.log(body);
  })
  res.end();
})

app.listen(app.get('port'), function () {
  console.log('Node app is running at localhost:' + app.get('port'));
})
