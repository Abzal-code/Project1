// const result = confirm("Are you here?");
// console.log(result);

// const name = prompt("Whats your name?");
// console.log(typeof(name));

// const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('What is your surname?', '');
// answers[2] = prompt('How old are you?', '');
// document.write('Senior ' + answers[0] + ', ' + answers[2]);

// console.log(typeof(answers));

// const Person = prompt("Who are you?");
// console.log(Person);

//                                                            Интерполяция
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Hello, ${user}`);


//                                                         Конкатенация
// console.log('arr' + " - object");   String
// console.log(4 + " - object");       String
// console.log(4 + + " - object");     NaN
// console.log(4 + + "5");             9

// let incr = 10,
//     decr = 10;

//     incr++;     10         ++incr
//     decr--;      9         --decr

//     console.log(incr);
//     console.log(decr);

//     console.log(incr++);
//     console.log(decr--);

//     console.log(5%2);           1

//     console.log(2*4 === '8')       строгий сравнение

//     const isChecked = true;
//             isClose = true;
//         console.log(isChecked && isClose);  && (и)
//         console.log(isChecked || isClose);     || (ИЛИ)
//         console.log(!isChecked || !isClose);    ! (НЕ)
        
// Первое консольное приложение
// 1)
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);


// 2)
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false 
// };

// 3)
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;

//     console.log(personalMovieDB);

// Условия
// if(4 !== 9) {
//     console.log('ok');
// } else {
//     console.log('wrong');
// }

// (4 == 9) ? console.log('ok') : console.log('wrong');  //тернарный оператор
// 4+4       //бинарные операторы
// +4       // унарный оператор

// const num = 7;
// switch (num);