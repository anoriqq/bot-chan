'use strict';

require('dotenv').config();

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
});

module.exports = sheets;
