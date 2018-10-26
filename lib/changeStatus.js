'use strict';

const addTextToSheets = require('./addTextToSheets');

function sleep_start(){
  console.log('sleep_start');
  addTextToSheets('sleep_start');
}

function sleep_end(){
  console.log('sleep_end');
  addTextToSheets('sleep_end');
}

function meal_start(){
  console.log('meal_start');
  addTextToSheets('meal_start');
}

function meal_end(){
  console.log('meal_end');
  addTextToSheets('meal_end');
}

function bath_start(){
  console.log('bath_start');
  addTextToSheets('bath_start');
}

function bath_end(){
  console.log('bath_start');
  addTextToSheets('bath_start');
}

function study_start(){
  console.log('study_start');
  addTextToSheets('study_start');
}

function study_end(){
  console.log('study_end');
  addTextToSheets('study_end');
}

function sleepy(){
  console.log('sleepy');
  addTextToSheets('sleepy');
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
