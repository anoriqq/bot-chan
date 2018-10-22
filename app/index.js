'use strict';
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 8000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.listen(app.get('port'), function(){
  console.log('Node app is running at localhost:' + app.get('port'));
})
