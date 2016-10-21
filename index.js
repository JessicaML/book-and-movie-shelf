var express = require('express');
var pug = require('pug');
var app = express();
var fs = require('fs');


var dataFilmInMemory = JSON.parse(fs.readFileSync("data.json").toString())["films"];

var dataBookInMemory = JSON.parse(fs.readFileSync("data.json").toString())["books"];

// var fs = require('fs');
// var dataInMemory;
//
// fs.readFile('filmdata.json', 'utf8', function (err, data) {
//   if (err) throw err;
//   dataInMemory = JSON.parse(data);
// });


function findFilm(slug) {
	for (var i = 0; i < dataFilmInMemory.length; i++) {
		if (dataFilmInMemory[i].slug === slug) {
			return dataFilmInMemory[i];
		}
	}
}

function findBook(slug) {
	for (var i = 0; i < dataBookInMemory.length; i++) {
		if (dataBookInMemory[i].slug === slug) {
			return dataBookInMemory[i];
		}
	}
}
app.use(express.static('public'));

app.get('/', function(request, response) {
	response.redirect('/media');
});

app.get('/media', function(req, res) {
	console.log('Requesting /media');
	res.send(pug.renderFile('views/index.pug', { films: dataFilmInMemory, books: dataBookInMemory }));
});

app.get('/books', function(req, res) {
	console.log('Requesting /books');
	res.send(pug.renderFile('views/books.pug', { films: dataFilmInMemory }));
});

app.get('/films', function(req, res) {
	console.log('Requesting /films');
	res.send(pug.renderFile('views/films.pug', { books: dataBookInMemory }));
});

app.get('/films/*', function(req, res) {
	var foundFilm = findFilm(req.params[0]);
	res.send(pug.renderFile('views/film.pug', { film: foundFilm }));
});

app.get('/books/*', function(req, res) {
	var foundBook = findBook(req.params[0]);
	res.send(pug.renderFile('views/book.pug', { book: foundBook }));
});

app.listen(3001, function() {
 console.log('Web server started on port 3001');
});
