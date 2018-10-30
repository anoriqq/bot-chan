'use strict';

const updateSheets = require('./updateSheets');
const postSlackMessage = require('./postSlackMessage');

function sleep_start(req, res){
  console.log('sleep_start');
  updateSheets('sleep_start', req.body.event.text);
  postSlackMessage(req, res, 'sleep_start');
}

function sleep_end(req, res){
  console.log('sleep_end');
  updateSheets('sleep_end', req.body.event.text);
  postSlackMessage(req, res, 'sleep_end');
}

function meal_start(req, res){
  console.log('meal_start');
  updateSheets('meal_start', req.body.event.text);
  postSlackMessage(req, res, 'meal_start');
}

function meal_end(req, res){
  console.log('meal_end');
  updateSheets('meal_end', req.body.event.text);
  postSlackMessage(req, res, 'meal_end');
}

function bath_start(req, res){
  console.log('bath_start');
  updateSheets('bath_start', req.body.event.text);
  postSlackMessage(req, res, 'bath_start');
}

function bath_end(req, res){
  console.log('bath_start');
  updateSheets('bath_start', req.body.event.text);
  postSlackMessage(req, res, 'bath_start');
}

function study_start(req, res){
  console.log('study_start');
  updateSheets('study_start', req.body.event.text);
  postSlackMessage(req, res, 'study_start');
}

function study_end(req, res){
  console.log('study_end');
  updateSheets('study_end', req.body.event.text);
  postSlackMessage(req, res, 'study_end');
}

function sleepy(req, res){
  console.log('sleepy');
  updateSheets('sleepy', req.body.event.text);
  postSlackMessage(req, res, 'sleepy');
}

function exception(req, res){
  console.log('exception');
  updateSheets('exception', req.body.event.text);
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
  exception: exception
};
