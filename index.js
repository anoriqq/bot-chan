'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
    let body = '';
    req.on('data', (chunk) =>{
      body += chunk;
    });
    req.on('end', () => {
      console.log(body);
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      let challenge = JSON.parse(body).challenge;
      res.write(challenge);
      res.end();
    });
});
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
