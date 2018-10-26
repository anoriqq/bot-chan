'use strict';

// パッケージの読み込み
require('date-utils');

// モジュールの読み込み
const sheets = require('../googleapis/sheets');
let ts = new Date();
let formattedTs = ts.toFormat('YYYY/MM/DD HH24:MI:SS');
module.exports = function addTextToSheets(text){
  sheets.spreadsheets.values.append({
    spreadsheetId: '1EFJ8wvFt9rCwj_MKTbvdgoPp_o3OL8vSoQaCEi1c7ZY',
    range: 'A1',
    valueInputOption:'RAW',
    insertDataOption: 'OVERWRITE',
    resource:{
      values: [[formattedTs][text]]
    }
  }).then(res => {
    console.log('シートに追加');
  }).catch(error => {
    console.error(error);
  });
};
