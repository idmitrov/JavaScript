'use strict';
//Write a JavaScript function bitChecker(value)
// that finds if the bit 3 an integer number (counting from 0) is 1

function bitChecker(value) {
    console.log(value & 8 === 8 ? true : false);
}

bitChecker(333); //true
bitChecker(425); //true
bitChecker(2567564754); //false
