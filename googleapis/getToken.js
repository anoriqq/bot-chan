'use strict';

require('dotenv').config();

const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const { promisify } = require('util');

const { OAuth2Client } = require('google-auth-library');

//promisifyでプロミス化
const writeFileAsync = promisify(fs.writeFile);

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'];

const main = async () => {
  const credentials = JSON.parse(process.env.GOOGLE_CLIENT_TOKEN);
  //認証
  const clientSecret = credentials.installed.client_secret;
  const clientId = credentials.installed.client_id;
  const redirectUrl = credentials.installed.redirect_uris[0];

  const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUrl);

  //get new token
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });

  console.log('Authorize this app by visiting this url: ', authUrl);

  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();

    oauth2Client.getToken(code, async (err, token) => {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }

      oauth2Client.credentials = token;

      try {
        fs.mkdirSync(TOKEN_DIR);
      } catch (err) {
        if (err.code != 'EEXIST') throw err;
      }

      await writeFileAsync(TOKEN_PATH, JSON.stringify(token));
      console.log('Token stored to ' + TOKEN_PATH);
    });
  });
};

main();
