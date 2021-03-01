const numberOfFilms = +prompt('сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt('На сколько вы оцение его?', ''),
      c = prompt('Один из просмотренных фильмов?', ''),
      d = prompt('На сколько вы оцение его?', '');
    
personalMovieDB.movies[a] = b;  
personalMovieDB.movies[c] = d;     

console.log(personalMovieDB);
