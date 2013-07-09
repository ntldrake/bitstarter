var express = require('express');

var file_content = fs.readFile('index.html', 'utf-8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(file_content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
