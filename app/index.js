'use strict';
// 環境変数の参照
const OAUTH_ACCESS_TOKEN = process.env.OAUTH_ACCESS_TOKEN;
const BOT_USER_OAUTH_ACCESS_TOKEN = process.env.BOT_USER_OAUTH_ACCESS_TOKEN;

// モジュールの読み込み
const http = require('http');
const nodeFetch = require('node-fetch');
const request = require('request');
const express = require('express');
const formUrlencoded = require('form-urlencoded');
const { URLSearchParams } = require("url");
const bodyParser = require('body-parser');
const app = express();

// Hrokuのポートか8000番ポートでサーバーを作る
app.set('port', (process.env.PORT || 8000));

// bodyをそれぞれの形式で読み込むように設定
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function createURLSearchParams(data) {
  const params = new URLSearchParams();
  Object.keys(data).forEach(key => params.append(key, data[key]));
  return params;
}

// /apiにPOSTメゾットが来たときの処理
app.post('/api', function (req, res) {
  if (req.body.challenge !== undefined) {
    // challengeがあったら認証処理
    res.status(200).send(req.body.challenge).end();
    console.log('Enable Events認証テスト challenge: ' + req.body.challenge);
  } else if (req.body.event.bot_id == undefined) {
    const url = "https://slack.com/api/chat.postMessage";
    const data = {
      "token": BOT_USER_OAUTH_ACCESS_TOKEN,
      "channel": req.body.event.channel,
      "text": req.body.event.text
    };
    const params = createURLSearchParams(data);
    const opt = {
      method: "POST",
      body: params
    };
    nodeFetch(url, opt)
      .then(res => res.text())
      .then(text => console.log(text))
      .catch(err => console.log(err));
  }
})

// 指定ポートで起動が確認できたらログを出力する
app.listen(app.get('port'), function () {
  console.log('Node app is running at localhost:' + app.get('port'));
})
