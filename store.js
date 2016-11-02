const fs = require('fs');

var dataFilmInMemory = JSON.parse(fs.readFileSync("data.json").toString())["films"];


// var dataInMemory = JSON.parse(fs.readFileSync("data.json").toString())["films"],["books"];


module.exports = {
  findFilm: function(slug) {
    for (var i = 0; i < dataFilmInMemory.length; i++) {
  		if (dataFilmInMemory[i].slug === slug) {
        console.log('fishy stuff');
  			return dataFilmInMemory[i];
  		}
  	}
  },

  findBook: function(slug) {
    for (var i = 0; i < dataBookInMemory.length; i++) {
  		if (dataBookInMemory[i].slug === slug) {
  			return dataBookInMemory[i];
  		}
  	}
  }
};

// function findFilm(slug) {
// 	for (var i = 0; i < dataFilmInMemory.length; i++) {
// 		if (dataFilmInMemory[i].slug === slug) {
// 			return dataFilmInMemory[i];
// 		}
// 	}
// }
//
// function findBook(slug) {
// 	for (var i = 0; i < dataBookInMemory.length; i++) {
// 		if (dataBookInMemory[i].slug === slug) {
// 			return dataBookInMemory[i];
// 		}
// 	}
// }




// function findMedia(slug) {
// 	for (var i = 0; i < dataInMemory.length; i++) {
// 		if (dataInMemory[i].slug === slug) {
// 			return dataInMemory[i];
// 		}
// 	}
// }
