'use strict';

/**
 * URLの認証処理モジュール
 * @param {objct} req リクエスト
 * @param {objct} res レスポンス
 * @returns {void}
 */
module.exports = function returnChallenge(req, res){
  res.status(200).send(req.body.challenge).end();
  console.log('Return challenge token. : ' + req.body.challenge);
};
