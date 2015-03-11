'use strict';
//Write a JavaScript function bitChecker(value)
// that finds if the bit 3 an integer number (counting from 0) is 1

function bitChecker(value) {
   return value & 8 ? true : false;
}

console.log(bitChecker(333)); //true
console.log(bitChecker(425)); //true
console.log(bitChecker(2567564754)); //false
