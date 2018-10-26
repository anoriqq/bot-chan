'use strict';

const addTextToSheets = require('./addTextToSheets');

function sleep_start(req, res){
  console.log('sleep_start');
  addTextToSheets('sleep_start');
  res.end();
}

function sleep_end(req, res){
  console.log('sleep_end');
  addTextToSheets('sleep_end');
  res.end();
}

function meal_start(req, res){
  console.log('meal_start');
  addTextToSheets('meal_start');
  res.end();
}

function meal_end(req, res){
  console.log('meal_end');
  addTextToSheets('meal_end');
  res.end();
}

function bath_start(req, res){
  console.log('bath_start');
  addTextToSheets('bath_start');
  res.end();
}

function bath_end(req, res){
  console.log('bath_start');
  addTextToSheets('bath_start');
  res.end();
}

function study_start(req, res){
  console.log('study_start');
  addTextToSheets('study_start');
  res.end();
}

function study_end(req, res){
  console.log('study_end');
  addTextToSheets('study_end');
  res.end();
}

function sleepy(req, res){
  console.log('sleepy');
  addTextToSheets('sleepy');
  res.end();
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
  sleepy: sleepy
};
