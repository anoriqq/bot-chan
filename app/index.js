'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('port', (process.env.PORT || 8000));
app.use(express.static(__dirname + '/public'));

app.get('/api', function(req, res){
  res.status(200).send('Hello World!');
});

app.post('/api', function(req, res){
  console.log(req.body);
  res.status(200).end();
})

app.listen(app.get('port'), function(){
  console.log('Node app is running at localhost:' + app.get('port'));
})
