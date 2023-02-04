
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

     start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },


    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            let lastMovie = prompt('Один из последних просмотренных фильмов', ''),
            ratingMovie = +prompt('На сколько его оцените', '');
        
            if (lastMovie != null && ratingMovie != null && lastMovie != '' && ratingMovie != '' && lastMovie.length < 50){
                personalMovieDB.movies[lastMovie] = ratingMovie;
            } else{
                i--;
            }
        } 
    },

    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log('Вы посмотрели мало фильмов!');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель!');
        } else if(personalMovieDB.count >= 30){
            console.log('Вы киноман!');
        } else {
            console.log('произошла ошибка');
        };
    },

    writeYourGenres: function(){
        for(let i = 1; i < 4; i++){
            let yourGenre = prompt(`Ваш любимый жанр под номером ${i}`);
            if(yourGenre != null && yourGenre != '' && yourGenre.length > 0){
                personalMovieDB.genres[i - 1] = yourGenre;
                } else {
                    i--;
                }
            } 
            
            personalMovieDB.genres.forEach(function(type, i){
                console.log(`Любимый жанр ${i} это - ${type} `);
            })
    },

    showMyDB: function(hidden){
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function(obj){
        if(personalMovieDB.private){
            ersonalMovieDB.private = false;
        } else {
            ersonalMovieDB.private = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();


// personalMovieDB.toggleVisibleMyDB();


console.log(personalMovieDB);




































