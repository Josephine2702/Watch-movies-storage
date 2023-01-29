let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


for(let i = 0; i < 2; i++){
    let lastMovie = prompt('Один из последних просмотренных фильмов', ''),
    ratingMovie = +prompt('На сколько его оцените', '');

    if (lastMovie != null && ratingMovie != null && lastMovie != '' && ratingMovie != '' && lastMovie.length < 50){
        personalMovieDB.movies[lastMovie] = ratingMovie;
    } else{
        i--;
    }

} 

if(personalMovieDB.count < 10){
    console.log('Вы посмотрели мало фильмов!');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель!');
} else if(personalMovieDB.count >= 30){
    console.log('Вы киноман!');
} else()