'use strict';

// パッケージの読み込み
require('date-utils');

// モジュールの読み込み
const sheets = require('../googleapis/sheets');

module.exports = function addTextToSheets(status, text){
  let ts = new Date();
  let formattedTs = ts.toFormat('YYYY/MM/DD HH24:MI:SS');
  let options = {
    spreadsheetId: process.env.SPREADSHEETS_ID,
    range: 'A1:B1',
    valueInputOption:'RAW',
    insertDataOption: 'OVERWRITE',
    resource:{
      values: [[formattedTs, status, text]]
    }
  };
  sheets.spreadsheets.values.append(options).then(() => {
    console.log('シートに追加');
  }).catch(error => {
    console.error(error);
  });
};
