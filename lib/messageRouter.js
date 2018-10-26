'use strict';

const changeStatus = require('./changeStatus');

module.exports = function messageRouter(text){
  switch(text){
    case 'neru':
    case '寝る':
    case 'ねる':
    case 'oyasumi':
    case 'おやすみ':
    case 'oyasuminasai':
    case 'おやすみなさい':
      console.log('睡眠開始');
      changeStatus.sleep_start();
      break;

    case 'okita':
    case 'おきた':
    case '起きた':
    case 'ohayo':
    case 'おはよ':
    case 'ohayou':
    case 'おはよう':
    case 'ohayougozaimisu':
    case 'おはようございます':
      console.log('睡眠終了');
      changeStatus.sleep_end();
      break;

    case 'gohan':
    case 'ご飯':
    case 'ごはん':
      console.log('食事開始');
      changeStatus.meal_start();
      break;

    case 'gohanowari':
    case 'ご飯終わり':
    case 'ご飯おわり':
    case 'ごはん終わり':
    case 'ごはんおわり':
      console.log('食事終了');
      changeStatus.meal_end();
      break;

    case 'ohuro':
    case 'おふろ':
    case 'お風呂':
    case 'huro':
    case 'ふろ':
    case '風呂':
      console.log('入浴開始');
      changeStatus.bath_start();
      break;

    case 'ohurodeta':
    case 'おふろでた':
    case 'おふろ出た':
    case 'お風呂でた':
    case 'お風呂出た':
    case 'hurodeta':
    case 'ふろ出た':
    case '風呂出た':
    case 'ふろでた':
    case '風呂でた':
      console.log('入浴終了');
      changeStatus.bath_end();
      break;

    case 'benkyou':
    case '勉強':
    case 'べんきょう':
      console.log('勉強開始');
      changeStatus.study_start();
      break;

    case 'benkyouowari':
    case '勉強終わり':
    case '勉強おわり':
    case 'べんきょう終わり':
    case 'べんきょうおわり':
      console.log('勉強終了');
      changeStatus.study_end();
      break;

    case 'nemui':
    case '眠い':
    case 'ねむい':
      console.log('眠い');
      changeStatus.sleepy();
      break;

    default:
      console.log('例外メッセージ');
      break;
  }
};
