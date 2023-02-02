
// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false,

//      start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },


//     rememberMyFilms: function(){
//         for(let i = 0; i < 2; i++){
//             let lastMovie = prompt('Один из последних просмотренных фильмов', ''),
//             ratingMovie = +prompt('На сколько его оцените', '');
        
//             if (lastMovie != null && ratingMovie != null && lastMovie != '' && ratingMovie != '' && lastMovie.length < 50){
//                 personalMovieDB.movies[lastMovie] = ratingMovie;
//             } else{
//                 i--;
//             }
//         } 
//     },

//     detectPersonalLevel: function(){
//         if(personalMovieDB.count < 10){
//             console.log('Вы посмотрели мало фильмов!');
//         } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//             console.log('Вы классический зритель!');
//         } else if(personalMovieDB.count >= 30){
//             console.log('Вы киноман!');
//         } else {
//             console.log('произошла ошибка');
//         };
//     },

//     writeYourGenres: function(){
//         for(let i = 1; i < 4; i++){
//             let yourGenre = prompt(`Ваш любимый жанр под номером ${i}`);
//             if(yourGenre != null && yourGenre != '' && yourGenre.length > 0){
//                 personalMovieDB.genres[i - 1] = yourGenre;
//                 } else {
//                     i--;
//                 }
//             } 
            
//             personalMovieDB.genres.forEach(function(type, i){
//                 console.log(`Любимый жанр ${i} это - ${type} `);
//             })
//     },

//     showMyDB: function(hidden){
//         if(!hidden) {
//             console.log(personalMovieDB);
//         }
//     },

//     toggleVisibleMyDB: function(obj){
//         if(personalMovieDB.private){
//             ersonalMovieDB.private = false;
//         } else {
//             ersonalMovieDB.private = true;
//         }
//     }
// };

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();


// // personalMovieDB.toggleVisibleMyDB();


// console.log(personalMovieDB);








































// function getTimeFromMinutes(time) {
//     if(typeof(time) !== 'number' || time < 0 || !Number.isInteger(time)){
//         console.log('Ошибка, проверьте данные');
//     } else {
//         let hour = Math.trunc(time / 60);
//         let min = time - (hour * 60);

//         let str = ''
//         if (hour === 1){
//             str = 'час';
//         } else if (hour === 2, 3, 4){
//             str = 'часа';
//         } else { str = 'часов';
//         }
//         console.log(`это ${hour} ${str} и ${min} минут`);
//     }
// }
// console.log(getTimeFromMinutes(465));


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan){
//         const persAge = plan.age;
//         let langs = plan.skills.languages;
//         let str = `Мне ${persAge} и я владею языками:`;
//             for(let key of langs){
//             let lang = key.toLocaleUpperCase();
//             str += `${lang + ' ' }`;
//         }
//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
// const personalExp = plan.skills.exp;
// return personalExp;
// }

// showExperience(personalPlanPeter); 


// function showProgrammingLangs(plan) {
// const copy = {...plan}
// let progLangs = copy.skills.programmingLangs;
// let str = '';
// for(let key in progLangs){
//     str += `Язык ${key} изучен на ${progLangs[key]} \n`;
// }
// return str
// }

// showProgrammingLangs(personalPlanPeter); 

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     if(arr.length === 0){
//         str += 'Семья пуста';
//     } else {
//         str += 'Семья состоит из: '
//     };

//     for(let item of arr){
//         str += `${item + ' '}`;
//     }
//     return str;
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     console.log(arr);
//     for(let item of arr){
//         console.log(item.toLowerCase());
//    }
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
// let reverseString = str.split('').reverse().join('');
// return reverseString;
// }
// console.log(reverse(someString));





const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam' ];

function sortStudentsByGroups(arr) {
let sortArr = arr.sort();


const sliced_array = [];
let str = 'Оставшиеся студенты: '
for (let i = 0; i <sortArr.length; i += 3) {
    if(sliced_array.length > 3){
        str += sortArr[i];
    }else {

        sliced_array.push(sortArr.slice(i, i + 3));
    }
    
}

console.log(sliced_array);
return str;
}
console.log(sortStudentsByGroups(students));