'use strict';

/*
 Write a JavaScript function printNumbers(number) that accepts as parameter an integer number.
 The function finds all integer numbers from 1 to n that are not divisible by 4 or by 5.
*/

function printNumbers(number) {
    var result = '';
    if (number < 0) {
        return 'no';
    } else {
        for (var i = 1; i <= number; i += 1) {
            if (i % 4 && i % 5) {
                result += (i < number ? i + ', ' : i);
            }
        }
        return result;
    }
}

console.log(printNumbers(20)); //20	1, 2, 3, 6, 7, 9, 11, 13, 14, 17, 18, 19
console.log(printNumbers(-5)); //no
console.log(printNumbers(13));//1, 2, 3, 6, 7, 9, 11, 13