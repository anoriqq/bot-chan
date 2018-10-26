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

// 静的ファイルをpublicに設置
app.use(express.static('public'));

// /apiにアクセスされたときrouterに渡す
app.use('/', route);

// 指定ポートでサーバーを起動｡完了後ログ出力
app.listen(app.get('port'), function () {
  console.info('Listening on ' + app.get('port'));
});
