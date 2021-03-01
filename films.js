const numberOfFilms = +prompt('сколько фильмов вы посмотрели?', '');

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};

for (let i = 1; i <= numberOfFilms; i++) {

    const a = prompt('Один из просмотренных фильмов?', ''),
        b = prompt('На сколько вы оцение его?', '');
    c = a.length;

    switch (a) {
        case c > 10:
            alert("слишком длинное название");
            break;
        case a == '':
            alert("вы забыли ввести название");
            break;
        case a == false:
            alert("вы не подтвердили");
            break;
        default:
            personalMovieDB.movies[a] = b;
            break;

    }

    //  if (a.length >= 10 || a == '' || a == false) {
    //      alert(" введены неверные данные")

    //  } else {
    //      personalMovieDB.movies[a] = b;
    //  }

};

if (numberOfFilms <= 5) {
    console.log('Маловато посмотрел');
} else if (6 >= numberOfFilms <= 10) {
    console.log('Норм');
} else if (numberOfFilms > 10) {
    console.log('Да вы батенька киноман!');
} else {
    console.log('ошибка');
}



console.log(personalMovieDB);