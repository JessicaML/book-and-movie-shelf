var express = require('express');
var pug = require('pug');
var app = express();

// tells the server that you can request static files from /public folder:
app.use(express.static(__dirname + '/'));

app.get('/', function(request, res) {
  res.send(pug.renderFile(__dirname + '/index.pug', {}));
  res.send(pug.renderFile(__dirname + '/books/the-great-gatsby.pug', {}));
  res.send(pug.renderFile(__dirname + '/books/ulysses.pug', {}));
  res.send(pug.renderFile(__dirname + '/books/war-and-peace.pug', {}));

});

app.get('/hello-world', function(req, res) {
  console.log('This is our custom code that gets printed');
  res.send('Now you request hello-world path!');
});

app.get('/*', function(req, res) {
  console.log('your dynamic path is: ');
  console.log(req.params[0]);
});


app.get('/example', function(req, res) {
  var simpleTemplate = function(name) {
    return '<html><head></head><body><h1>Hello, ' + name + '</h1></body></html';
  };

  res.send(simpleTemplate('Izel'));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
