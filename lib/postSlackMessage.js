'use strict';

// パッケージの読み込み
const nodeFetch = require('node-fetch');
const { URLSearchParams } = require('url');
require('dotenv').config();

/**
 * チャンネルに投稿されたメッセージを処理するモジュール
 * @param {objct} req リクエスト
 * @param {objct} res レスポンス
 * @param {string} text 送信するメッセージ
 * @param {string} channel 指定したチャンネルに送りたいとき指定する
 * @returns {void}
 */
module.exports = function postSlackMessage(req, res, text, channel){
  const url = 'https://slack.com/api/chat.postMessage'; // チャンネルにメッセージを送るメゾットURL
  const data = {
    'token': process.env.BOT_USER_OAUTH_ACCESS_TOKEN, // botのトークン
    'channel': channel || req.body.event.channel, // メッセージが投稿されたチャンネルに投稿する
    'text': text // チャンネルに投稿するテキスト
  };
  const params = createURLSearchParams(data); // dataをURLエンコードしてparamsに入れる
  const options = {
    method: 'POST', // POSTする
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // headerにContent-Typeを設定
    body: params // bodyはエンコードしたdata
  };
  nodeFetch(url, options)
    .then(res => res.text()) // fetchに成功したとき
    .then(text => console.log('送信成功 : ' + text)) // textをログ出力する
    .catch(err => console.log('送信失敗 エラー : ' + err)); // 失敗したときerrをログ出力する

  if(res) res.status(200).end();
};

/**
 * ObjectをURLSearchParamsオブジェクトに変換する関数
 * @param {object} data パラメーターオブジェクト
 * @returns {object} params
 */
function createURLSearchParams(data){
  const params = new URLSearchParams();
  Object.keys(data).forEach(key => params.append(key, data[key]));
  return params;
}
