'use strict';

const addTextToSheets = require('./addTextToSheets');
const postSlackMessage = require('./postSlackMessage');

function sleep_start(req, res){
  console.log('sleep_start');
  addTextToSheets('sleep_start');
  postSlackMessage(req, res, 'sleep_start');
}

function sleep_end(req, res){
  console.log('sleep_end');
  addTextToSheets('sleep_end');
  postSlackMessage(req, res, 'sleep_end');
}

function meal_start(req, res){
  console.log('meal_start');
  addTextToSheets('meal_start');
  postSlackMessage(req, res, 'meal_start');
}

function meal_end(req, res){
  console.log('meal_end');
  addTextToSheets('meal_end');
  postSlackMessage(req, res, 'meal_end');
}

function bath_start(req, res){
  console.log('bath_start');
  addTextToSheets('bath_start');
  postSlackMessage(req, res, 'bath_start');
}

function bath_end(req, res){
  console.log('bath_start');
  addTextToSheets('bath_start');
  postSlackMessage(req, res, 'bath_start');
}

function study_start(req, res){
  console.log('study_start');
  addTextToSheets('study_start');
  postSlackMessage(req, res, 'study_start');
}

function study_end(req, res){
  console.log('study_end');
  addTextToSheets('study_end');
  postSlackMessage(req, res, 'study_end');
}

function sleepy(req, res){
  console.log('sleepy');
  addTextToSheets('sleepy');
  postSlackMessage(req, res, 'sleepy');
}

function exception(req, res){
  console.log('exception');
  addTextToSheets('exception');
  postSlackMessage(req, res, res.body.event.text);
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
  exception: exception
};
