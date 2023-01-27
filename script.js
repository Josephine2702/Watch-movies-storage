let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastMovie1 = prompt('Один из последних просмотренных фильмов', ''),
    ratingMovie1 = +prompt('На сколько его оцените', ''),
    lastMovie2 = prompt('Один из последних просмотренных фильмов', ''),
    ratingMovie2 = +prompt('На сколько его оцените', '');


personalMovieDB.movies[lastMovie1] = ratingMovie1;
personalMovieDB.movies[lastMovie2] = ratingMovie2;

console.log(personalMovieDB)