let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    } else {
        console.log("Access Denied!");
    }
}

function writeYourGenres() {

    for (let i = 0; i < 3; i++) {

        const arr = prompt('Ваш любимый жанр по номером ' + (i + 1), '');

        if (arr != null && arr != '' && arr.length < 50) {
            personalMovieDB.genres[i] = arr;

            
        }
    }
    console.log(personalMovieDB.genres);
}

writeYourGenres();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let a = prompt('введите название фильма №' + (i + 1), ''),
            b = prompt('На сколько вы оцение его?', '');


        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');

        } else {
            console.log('error');
            i--;
        }

    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 5) {
        console.log('Маловато посмотрел');
    } else if (personalMovieDB >= 5 && personalMovieDB < 10) {
        console.log('Норм');
    } else if (personalMovieDB > 10) {
        console.log('Да вы батенька киноман!');
    } else {
        console.log('ошибка');
    }
}
detectPersonalLevel();




console.log(personalMovieDB);