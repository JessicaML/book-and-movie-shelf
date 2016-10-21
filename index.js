var express = require('express');
var pug = require('pug');
var app = express();
var fs = require('fs');


var dataInMemory = JSON.parse(fs.readFileSync("filmdata.json").toString())["films"];


// var fs = require('fs');
// var dataInMemory;
//
// fs.readFile('filmdata.json', 'utf8', function (err, data) {
//   if (err) throw err;
//   dataInMemory = JSON.parse(data);
// });


function findFilm(slug) {
	for (var i = 0; i < dataInMemory.length; i++) {
		if (dataInMemory[i].slug === slug) {
			return dataInMemory[i];
		}
	}
}

app.use(express.static('public'));

app.get('/', function(request, response) {
	response.redirect('/films');
});

app.get('/films', function(req, res) {
	console.log('Requesting /films');
	res.send(pug.renderFile('views/index.pug', { films: dataInMemory }));
});


app.get('/films/*', function(req, res) {
	var foundFilm = findFilm(req.params[0]);
	res.send(pug.renderFile('views/film.pug', { film: foundFilm }));
});


app.listen(3001, function() {
 console.log('Web server started on port 3001');
});
