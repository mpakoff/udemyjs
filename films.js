const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleWisibleMyDB: function() {
        if (personalMovieDB == false) {
            personalMovieDB = true
        } else {
            personalMovieDB = false
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let arr = prompt('Ваш любимый жанр по номером ' + i, '');
            while (arr == '' || arr == null) {
                arr = prompt('Ваш любимый жанр по номером ' + i, '');
            } // или const arr = prompt(`Ваш любимый жанр по номером ${i} `, '');
            if (arr != null && arr != '' && arr.length < 50) {
                personalMovieDB.genres[i - 1] = arr;
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр № ${i + 1}: это ${item}`);
        });
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('введите название фильма № ' + (i + 1), ''),
                b = prompt('На сколько вы оцение его?', '');


            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');

            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 5) {
            console.log('Маловато посмотрел');
        } else if (personalMovieDB >= 5 && personalMovieDB < 10) {
            console.log('Норм');
        } else if (personalMovieDB > 10) {
            console.log('Да вы батенька киноман!');
        } else {
            console.log(personalMovieDB.count);
        }
    }

};

personalMovieDB.start();
personalMovieDB.showMyDB(personalMovieDB.private);
personalMovieDB.writeYourGenres();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();1



// function showMyDB() {
//     if (personalMovieDB.private == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log("Access Denied!");
//     }
// }

// function showMyDB(hidden) { //вариант с передачей аргумента. hidden принимает true или false personalMovieDB.private
// if (!hidden) {
//             console.log(personalMovieDB);
//         }
// }

// showMyDB(personalMovieDB.private);

// function writeYourGenres() {

// for (let i = 1; i <= 3; i++) {

//     const arr = prompt('Ваш любимый жанр по номером ' + i, ''); // или const arr = prompt(`Ваш любимый жанр по номером ${i} `, '');

//     if (arr != null && arr != '' && arr.length < 50) {
//         personalMovieDB.genres[i - 1] = arr;
//     }
// }
//     console.log(personalMovieDB.genres);
// }

// writeYourGenres();

// function rememberMyFilms() {
// for (let i = 0; i < 2; i++) {

//     let a = prompt('введите название фильма № ' + (i + 1), ''),
//         b = prompt('На сколько вы оцение его?', '');


//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');

//     } else {
//         console.log('error');
//         i--;
//     }

// }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
// if (personalMovieDB.count < 5) {
//     console.log('Маловато посмотрел');
// } else if (personalMovieDB >= 5 && personalMovieDB < 10) {
//     console.log('Норм');
// } else if (personalMovieDB > 10) {
//     console.log('Да вы батенька киноман!');
// } else {
//     console.log('ошибка');
// }
// }
// detectPersonalLevel();