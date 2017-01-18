var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

var messages = [];


app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
  console.log(messages);
});

app.post('/messages', function (req, res, next) {
  console.log(res);
  console.log(req.body);
  messages.push({ message: req.body.message, time: new Date(), username: 'zacboz', profilePic: './img/11864844_10153498769319043_7373849863124030270_o.jpg' });
  res.status(200).json({ messages: messages });
  console.log(messages);
});

app.listen(3000, function(){
  console.log('listening on port 3000');
});
