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
  let postData = {
    'token': BOT_USER_OAUTH_ACCESS_TOKEN,
    'channel': req.body.event.channel,
    'text': req.body.event.text
  };
  let postDataStr = JSON.stringify(postData);
  let options = {
    host: 'slack.com',
    port: 80,
    path: '/api/chat.postMessage',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  let req = http.request(options, (res) => {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('BODY: ' + chunk);
    });
  });
  req.on('error', (e) => {
    console.log('problem with request: ' + e.message);
  });
  req.write(postDataStr);
  req.end();
})

app.listen(app.get('port'), function () {
  console.log('Node app is running at localhost:' + app.get('port'));
})
