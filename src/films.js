const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const directorsResult = movies.map(movies => movies.director);
  //console.log(directorsResult);
  return directorsResult;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  const moviesFromDirector = array.filter(function(movie) {
    return movie.director === director;
  })
  return moviesFromDirector;
  //console.log(moviesFromDirector);
}
getMoviesFromDirector(movies, "Lana Wachowski");

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  //crear nova array
  let newMoviesFromDirector = [];

  //seleccionar el director i crear l'array de les seves pelis (exercici 2)
  let moviesFromDirector = array.filter(function(movie) {

    let seleccionarDirector = movie.director === director; //ens dona true si la peli és del director triat

    if (seleccionarDirector == true) {
      newMoviesFromDirector.push(movie);
    }
  })
  //console.log(newMoviesFromDirector);
  let sumOfDirector = newMoviesFromDirector.reduce(function(acumulador, movie) {
    return acumulador + movie.score;
  }, 0)
  //console.log(sumOfDirector);
  let averageOfDirector = sumOfDirector/newMoviesFromDirector.length;
  //console.log(averageOfDirector);
  return averageOfDirector;

}

moviesAverageOfDirector(movies, "Hayao Miyazaki");


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  //crear array de només el nom de les pelis amb .map()
  const filmTitles = array.map(array => array.title);
  //console.log(filmTitles);

  //ordenar alfabèticament amb el mètode .sort() i només incloure les 20 primeres amb el mètode .slice()
  const titlesAlphabetically = filmTitles.sort().slice(0, 20);
  //console.log(titlesAlphabetically);

  return titlesAlphabetically;  
}
orderAlphabetically(movies);




// Exercise 5: Order by year, ascending
function orderByYear(array) {

  //funció comparativa per als anys
  function orderYears(a, b) {
    if (a.year == b.year) {
        if (a.title < b.title){
          return -1;
        } else if (a.title > b.title) {
          return 1;
        }
    return 0; 
    } else if (a.year < b.year) {
      return -1;
    }
    return 1;
  }
  
  //ordenar les pelis per any en ordre ascendent
  const filmYearsAscendent = array.sort(orderYears);
  //console.log(filmYearsAscendent);

  //funció per a seleccionar les propietats
  function selectProps(show) {
    const {title, year} = show;
    return {title, year};
  }

  const filmYears = filmYearsAscendent.map(selectProps);
  //console.log(filmYears);
  return filmYears;

}

orderByYear(movies);




// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, categoria) {

  //array nova que contindrà només les pelis de determinat gènere
  const newMoviesByCategory = [];

  //metode filter per determinar si la peli té el gènere en qüestió
  const moviesByCategory = movies.filter(function(movie) {

    const seleccionarCategoria = movie.genre.includes(categoria); 
    
    if (seleccionarCategoria == true) {
      newMoviesByCategory.push(movie);
    }
  })
  //console.log(newMoviesByCategory);

  //array que contindrà només les puntuacions vàlides (més grans que 0)
  const validScores = [];

  const filterScores = newMoviesByCategory.filter(function(movie){
    if (movie.score > 0){
      validScores.push(movie.score);
    }
  })
  //console.log(validScores);

//calcul de la mitjana
const sumOfCategory = validScores.reduce(function(acumulador, score){
  return acumulador + score;
}, 0)
//console.log(sumOfCategory);

let averageOfCategory = sumOfCategory/validScores.length;
//console.log(averageOfCategory);

return averageOfCategory;
}
moviesAverageByCategory(movies, "Romance");

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
