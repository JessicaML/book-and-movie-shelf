var express = require('express');
var pug = require('pug');
var app = express();

var dataInMemory = [
	{
		title: 'The Great Gatsby',
		slug: 'the-great-gatsby',
		imageSrc: '../images/the-great-gatsby.jpg',
		authorName: 'F. Scott FitzGerald',
		description: 'Some guy is after this idiot woman who ignores her kid. Capitalism n that.',
		numberOfPages: 444
	},

	{
		title: 'Ulysses',
		slug: 'ulysses',
		imageSrc: '../images/ulysses.jpg',
		authorName: 'James Joyce',
		description: 'Like Homers Iliad, but some guy bumbling around Dublin. Birth of Modernism I think.',
		numberOfPages: 444
	},

	{
		title: 'War and Peace',
		slug: 'war-and-peace',
		imageSrc: '../images/war-and-peace.jpeg',
		authorName: 'Leo Tolstoy',
		description: 'Napoleon invades Russia, two friends complain about their wives.',
		numberOfPages: 444
	}
];


function findBook(slug) {
	for (var i = 0; i < dataInMemory.length; i++) {
		if (dataInMemory[i].slug === slug) {
			return dataInMemory[i];
		}
	}
}

app.use(express.static('public'));

app.get('/', function(request, response) {
	response.redirect('/books');
});

app.get('/books', function(req, res) {
	console.log('Requesting /books');
	res.send(pug.renderFile('views/index.pug', { books: dataInMemory }));
});


app.get('/books/*', function(req, res) {
	var foundBook = findBook(req.params[0]);
	res.send(pug.renderFile('views/book.pug', { book: foundBook }));
});


app.listen(3001, function() {
 console.log('Web server started on port 3000');
});
