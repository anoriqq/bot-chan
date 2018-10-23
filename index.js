/* サーバーを起動するメインスクリプト */

'use strict';

// モジュールの読み込み
const bodyParser = require('body-parser');
const route = require('./routes/index');
const express = require('express');
const app = express();

// Herokuのポートは8000番ポートでサーバーを構成
app.set('port', (process.env.PORT || 8000));

// コールバックボディーがjson､rulのときパースする
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// /apiにアクセスされたときrouterに渡す
//app.use('/', route);
app.post('/api', function(req, res, next){
  console.log("POST: /api");
  console.log(req.body);
  res.end();
});

// 指定ポートでサーバーを起動｡完了後ログ出力
app.listen(app.get('port'), function () {
  console.info('Listening on ' + app.get('port'));
});
