'use strict';

// モジュールの読み込み
const nodeFetch = require('node-fetch');
const { URLSearchParams } = require("url");

/** チャンネルに投稿されたメッセージを処理するモジュール */
module.exports = function assignMessage(req, res){
  console.log(`メッセージを受信: ${req.body.event.text}`);
  const url = "https://slack.com/api/chat.postMessage"; // チャンネルにメッセージを送るメゾットURL
  const data = {
    "token": process.env.BOT_USER_OAUTH_ACCESS_TOKEN, // botのトークン
    "channel": req.body.event.channel, // メッセージが投稿されたチャンネルに投稿する
    "text": req.body.event.text // チャンネルに投稿されたテキストを投稿する
  };
  const params = createURLSearchParams(data); // dataをURLエンコードしてparamsに入れる
  const options = {
    method: "POST", // POSTする
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // headerにContent-Typeを設定
    body: params // bodyはエンコードしたdata
  };
  nodeFetch(url, options)
  .then(res => res.text()) // fetchに成功したとき
  .then(text => console.log(text)) // textをログ出力する
  .catch(err => console.log(err)); // 失敗したときerrをログ出力する

  res.end();
}

/**
 * ObjectをURLSearchParamsオブジェクトに変換する関数
 * @param {object} data 
 */
function createURLSearchParams(data){
  const params = new URLSearchParams();
  Object.keys(data).forEach(key => params.append(key, data[key]));
  return params;
}
