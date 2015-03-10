'use strict';

function convertToHP(kw) {
    var hp = 0.745699872;
    var result =  kw / hp;
    return Math.round(result * 100)/ 100;
}

console.log(convertToHP(75));