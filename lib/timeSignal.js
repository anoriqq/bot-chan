'use strict';

// パッケージの読み込み
require('date-utils');

// モジュールの読み込み
const postSlackMessage = require('./postSlackMessage');

const punctuation = 15;// 15分間隔で送信

module.exports = function timeSignal(){
  let now = new Date();
  let MI = now.toFormat('MI');
  let SS = now.toFormat('SS');

  SS = 60 - SS;
  if (SS == 60){
    SS = 0;
  }
  if (SS > 0){
    MI = punctuation - 1 - MI % punctuation;
  } else {
    MI = punctuation - MI % punctuation;
  }

  console.log(`時報起動 次回の実行: ${MI}分${SS}秒後`);

  setTimeout(() => {
    postTime();
    setInterval(function(){
      postTime();
    }, punctuation * 60 * 1000);
  }, (MI * 60 + SS) * 1000);
};

function postTime(){
  let now = new Date().toFormat('YYYY/MM/DD HH24:MI:SS');
  postSlackMessage(null, null, now, 'GDPK7CBHR');
}
