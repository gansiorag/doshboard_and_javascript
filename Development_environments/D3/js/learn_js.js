"use strict";
function first(){
    setTimeout(function(){
        console.log(1);
    },500);
}

function second(){
    console.log(2);
    }

    first();
    second();

function learnJS(lang, callback) {
    console.log(`Я учу : ${lang}`);
    callback();
}

function done(){
    console.log('Я прошел этот урок!');
};

learnJS('JavaScript', done);

const options = {
    name: 'test',
    width: 1024,
    height:1024,
    colors:{
        border:'black',
        bg:'red'
    }
}

// console.log(options.name)
// delete options.name;
// console.log(options);

// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Optons object ${i} have values ${options[key][i]}`);
//         }
//     } else {
//     console.log(`Options ${key} have value ${options[key]}`);
//     }
// }

console.log(Object.keys(options).length)