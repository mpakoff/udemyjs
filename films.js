const numberOfFilms = +prompt('сколько фильмов вы посмотрели?', '');

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};

for (let i = 1; i <= numberOfFilms; i++) {

    let a = prompt('введите название фильма №' + i, ''),
        b = prompt('На сколько вы оцение его?', '');
           

     if (a != null && b != null && a != '' && b != '' && a.length <50) {
        personalMovieDB.movies[a] = b;
        console.log('done');

     } else {
         console.log('error');
         i--;
     }

}

if (personalMovieDB.count < 5) {
    console.log('Маловато посмотрел');
} else if (personalMovieDB >= 5 && personalMovieDB < 10) {
    console.log('Норм');
} else if (personalMovieDB > 10) {
    console.log('Да вы батенька киноман!');
} else {
    console.log('ошибка');
}



console.log(personalMovieDB);