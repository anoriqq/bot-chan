'use strict';

// パッケージの読み込み
require('date-utils');

const sheetsUpdate = require('./sheetsUpdate');
const postSlackMessage = require('./postSlackMessage');

let currentTime = getCurrentTime().toFormat('HH24時MI分');

function sleep_start(req, res){
  console.log('sleep_start');
  let color = {red:127, green:191, blue:255};
  sheetsUpdate('sleep_start', color, req.body.event.text);
  postSlackMessage(req, res, `${currentTime}に就寝を記録しました\nおやすみなさい`);
}

function sleep_end(req, res){
  console.log('sleep_end');
  let color = {red:204, green:230, blue:255};
  sheetsUpdate('sleep_end', color, req.body.event.text);
  postSlackMessage(req, res, `${currentTime}に起床を記録しました\nおはようございます`);
}

function meal_start(req, res){
  console.log('meal_start');
  let color = {red:127, green:255, blue:127};
  sheetsUpdate('meal_start', color, req.body.event.text);
  postSlackMessage(req, res, `${currentTime}に食事開始を記録しました`);
}

function meal_end(req, res){
  console.log('meal_end');
  let color = {red:204, green:255, blue:204};
  sheetsUpdate('meal_end', color, req.body.event.text);
  postSlackMessage(req, res, `${currentTime}に食事終了を記録しました\n歯磨きしましょう`);
}

function bath_start(req, res){
  console.log('bath_start');
  let color = {red:127, green:255, blue:255};
  sheetsUpdate('bath_start', color, req.body.event.text);
  postSlackMessage(req, res, `${currentTime}に入浴開始を記録しました`);
}

function bath_end(req, res){
  console.log('bath_start');
  let color = {red:204, green:255, blue:255};
  sheetsUpdate('bath_start', color, req.body.event.text);
  postSlackMessage(req, res, `${currentTime}に入浴終了を記録しました`);
}

function study_start(req, res){
  console.log('study_start');
  let color = {red:255, green:191, blue:127};
  sheetsUpdate('study_start', color, req.body.event.text);
  postSlackMessage(req, res, `${currentTime}に勉強開始を記録しました`);
}

function study_end(req, res){
  console.log('study_end');
  let color = {red:255, green:230, blue:204};
  sheetsUpdate('study_end', color, req.body.event.text);
  postSlackMessage(req, res, `${currentTime}に勉強終了を記録しました\nお疲れ様でした`);
}

function sleepy(req, res){
  console.log('sleepy');
  let color = {red:191, green:127, blue:255};
  sheetsUpdate('sleepy', color, req.body.event.text);
  postSlackMessage(req, res, `${currentTime}に眠気を記録しました`);
}

function hungry(req, res){
  console.log('hungry');
  let color = {red:255, green:127, blue:127};
  sheetsUpdate('hungry', color, req.body.event.text);
  postSlackMessage(req, res, `${currentTime}に空腹を記録しました`);
}

function goOut_start(req, res){
  console.log('goOut_start');
  let color = {red:255, green:255, blue:127};
  sheetsUpdate('goOut_start', color, req.body.event.text);
  postSlackMessage(req, res, `${currentTime}に外出を記録しました\nいってらっしゃい`);
}

function goOut_end(req, res){
  console.log('goOut_end');
  let color = {red:255, green:255, blue:204};
  sheetsUpdate('goOut_end', color, req.body.event.text);
  postSlackMessage(req, res, `${currentTime}に帰宅を記録しました\nおかえりなさい`);
}

function exception(req, res){
  console.log('exception');
  let color = {red:255, green:255, blue:255};
  sheetsUpdate('exception', color, req.body.event.text);
  postSlackMessage(req, res, req.body.event.text);
}

module.exports = {
  sleep_start: sleep_start,
  sleep_end: sleep_end,
  meal_start: meal_start,
  meal_end: meal_end,
  bath_start: bath_start,
  bath_end: bath_end,
  study_start: study_start,
  study_end: study_end,
  sleepy: sleepy,
  exception: exception,
  hungry: hungry,
  goOut_start: goOut_start,
  goOut_end: goOut_end
};

// 現在時刻を返す関数
function getCurrentTime(){
  return new Date();
}
