'use strict';

// パッケージの読み込み
require('date-utils');

// モジュールの読み込み
const sheets = require('../googleapis/sheets');

module.exports = function sheetsUpdate(status, color, text){
  const SPREADSHEETS_ID = process.env.SPREADSHEETS_ID;
  const requests = [];
  let ts = new Date();
  let formattedTs = ts.toFormat('YYYY/MM/DD HH24:MI:SS');
  let backgroundColor = conversionColor(setBackgroundColor());
  let statusColor = conversionColor(color);

  requests.push({
    appendCells:{
      sheetId:0,
      rows:[{
        values:[{
          userEnteredValue:{stringValue:formattedTs},
          userEnteredFormat:{backgroundColor:backgroundColor}
        }, {
          userEnteredValue:{stringValue:status},
          userEnteredFormat:{backgroundColor:statusColor}
        }, {
          userEnteredValue:{stringValue:text},
          userEnteredFormat:{backgroundColor:backgroundColor}
        }]
      }],
      fields:'userEnteredValue,userEnteredFormat.backgroundColor'
    }
  });

  let resource = {requests:requests};

  sheets.spreadsheets.batchUpdate({
    spreadsheetId:SPREADSHEETS_ID,
    resource:resource
  }).then(()=>{
    console.log('シート更新完了');
  }).catch((err)=>{
    console.log(err);
  });
};

const day = 60 * 60 * 24;
function setBackgroundColor(){
  let backgroundColor = {};
  let rgb;

  let now = new Date();
  let time = Date.parse(now) / 1000 + day;
  let days = time / day;
  if(Math.floor(days % 2) === 0){
    rgb = 255;
  }else{
    rgb = 240;
  }

  backgroundColor = {
    red: rgb,
    green: rgb,
    blue: rgb
  };

  return backgroundColor;
}

function conversionColor(color){
  let colorProportion = {};
  if(color.red){
    colorProportion.red = color.red/255;
  }
  if(color.green){
    colorProportion.green = color.green/255;
  }
  if(color.blue){
    colorProportion.blue = color.blue/255;
  }
  if(color.alpha){
    colorProportion.alpha = color.alpha;
  }
  return colorProportion;
}
