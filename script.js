let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
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



function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        let lastMovie = prompt('Один из последних просмотренных фильмов', ''),
        ratingMovie = +prompt('На сколько его оцените', '');
    
        if (lastMovie != null && ratingMovie != null && lastMovie != '' && ratingMovie != '' && lastMovie.length < 50){
            personalMovieDB.movies[lastMovie] = ratingMovie;
        } else{
            i--;
        }
    } 

}

rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('Вы посмотрели мало фильмов!');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель!');
    } else if(personalMovieDB.count >= 30){
        console.log('Вы киноман!');
    } else {
        console.log('произошла ошибка');
    };

}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}



function writeYourGenres(){
    for(let i = 1; i < 4; i++){
        let yourGenre = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres.push(yourGenre);
    } 
}
writeYourGenres();

console.log(personalMovieDB);
