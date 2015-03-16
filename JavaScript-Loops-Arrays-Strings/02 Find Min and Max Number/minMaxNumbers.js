'use strict';

/*
 Write a JavaScript function findMinAndMax(arr) that accepts as parameter an array of numbers.
 The function finds the minimum and the maximum number.
*/

function findMinAndMax(arr) {
    var maxValue = Math.max.apply(Math, arr),
        minValue = Math.min.apply(Math, arr);
    return 'Min -> ' + minValue + '\r\n' + 'Max -> ' + maxValue;
}

console.log(findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31])); //Min -> 1 Max -> 31
console.log(findMinAndMax([2, 2, 2, 2, 2])); //Min -> 2 Max -> 2
console.log(findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12])); //Min -> -300 Max -> 500