'use strict';

const sheetsUpdate = require('./sheetsUpdate');
const postSlackMessage = require('./postSlackMessage');

function sleep_start(req, res){
  console.log('sleep_start');
  let color = {red:127, green:191, blue:255};
  sheetsUpdate('sleep_start', color, req.body.event.text);
  postSlackMessage(req, res, 'sleep_start');
}

function sleep_end(req, res){
  console.log('sleep_end');
  let color = {red:204, green:230, blue:255};
  sheetsUpdate('sleep_end', color, req.body.event.text);
  postSlackMessage(req, res, 'sleep_end');
}

function meal_start(req, res){
  console.log('meal_start');
  let color = {red:127, green:255, blue:127};
  sheetsUpdate('meal_start', color, req.body.event.text);
  postSlackMessage(req, res, 'meal_start');
}

function meal_end(req, res){
  console.log('meal_end');
  let color = {red:204, green:255, blue:204};
  sheetsUpdate('meal_end', color, req.body.event.text);
  postSlackMessage(req, res, 'meal_end');
}

function bath_start(req, res){
  console.log('bath_start');
  let color = {red:127, green:255, blue:255};
  sheetsUpdate('bath_start', color, req.body.event.text);
  postSlackMessage(req, res, 'bath_start');
}

function bath_end(req, res){
  console.log('bath_start');
  let color = {red:204, green:255, blue:255};
  sheetsUpdate('bath_start', color, req.body.event.text);
  postSlackMessage(req, res, 'bath_start');
}

function study_start(req, res){
  console.log('study_start');
  let color = {red:255, green:191, blue:127};
  sheetsUpdate('study_start', color, req.body.event.text);
  postSlackMessage(req, res, 'study_start');
}

function study_end(req, res){
  console.log('study_end');
  let color = {red:255, green:230, blue:204};
  sheetsUpdate('study_end', color, req.body.event.text);
  postSlackMessage(req, res, 'study_end');
}

function sleepy(req, res){
  console.log('sleepy');
  let color = {red:191, green:127, blue:255};
  sheetsUpdate('sleepy', color, req.body.event.text);
  postSlackMessage(req, res, 'sleepy');
}

function hungry(req, res){
  console.log('hungry');
  let color = {red:255, green:127, blue:127};
  sheetsUpdate('hungry', color, req.body.event.text);
  postSlackMessage(req, res, 'hungry');
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
  hungry: hungry
};
