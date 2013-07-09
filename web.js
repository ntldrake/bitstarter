
var express = require('express');

var file_content = fs.readFile('~/bitstarter/index.html', 'utf-8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = new buffer();
  response.send(buffer.toString('utf8', fs.readFileSync("index.html")));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
