'use strict';

require('dotenv').config();

const fs = require('fs');
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');

const GOOGLE_CLIENT_TOKEN = JSON.parse(process.env.GOOGLE_CLIENT_TOKEN);

const clientId = GOOGLE_CLIENT_TOKEN.installed.client_id;
const clientSecret = GOOGLE_CLIENT_TOKEN.installed.client_secret;
const redirectUrl = GOOGLE_CLIENT_TOKEN.installed.redirect_uris[0];

const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUrl);

oauth2Client.credentials = JSON.parse(process.env.GOOGLE_SHEETS_API_KEY);

const sheets = google.sheets({
  version: 'v4',
  auth: oauth2Client
})

sheets.spreadsheets.values.get({
  spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
  range: 'A2'
}).then(res => {
  console.log(res.data.values);
}).catch(error => {
  console.error(error);
});
