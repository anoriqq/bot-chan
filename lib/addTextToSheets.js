'use strict';

const sheets = require('../googleapis/sheets');

module.exports = function addTextToSheets(text){
  sheets.spreadsheets.values.append({
    spreadsheetId: '1EFJ8wvFt9rCwj_MKTbvdgoPp_o3OL8vSoQaCEi1c7ZY',
    range: 'A1',
    valueInputOption:'RAW',
    insertDataOption: 'OVERWRITE',
    resource:{
      values: [[text]]
    }
  }).then(res => {
    console.log('シートに追加');
  }).catch(error => {
    console.error(error);
  });
};
