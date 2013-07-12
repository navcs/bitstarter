var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var filebuff = fs.readFileSync('index.html','ascii');
  var buff = new Buffer(filebuff.length);
  buff.write(filebuff, 0, filebuff.length);
  response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
