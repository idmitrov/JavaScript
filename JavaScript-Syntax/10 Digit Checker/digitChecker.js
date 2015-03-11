//Write a JavaScript function checkDigit(value)
//that finds if the third digit (right-to-left) of an integer number n (n>1000) is 3.

'use strict';

function checkDigit(number) {
    if (number < 1000) {
        throw 'Expected number greater than 1000'
    } else {
        return Math.floor(number / 100) % 10 === 3;
    }
}

console.log(checkDigit(1235)); //false
console.log(checkDigit(25368)); //true
console.log(checkDigit(123456)); //false