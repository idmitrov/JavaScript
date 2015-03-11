/*
 Write a JavaScript function soothsayer(value) that accepts the following parameters (source arrays):
 array of numbers, array of programming languages, array of cities, array of cars.
 Each array must consist of five elements.
 The function must return an array result[] that consists of one random item from each source array.
 Write a JS program that prints on the console the following output:
 “You will work result[0] years on result[1]. You will live in result[2] and drive result[3].”.
*/

'use strict';

function soothsayer(value) {
    //GENERATE A NUMBER
    function generateNum(range) {
        return Math.floor(Math.random() * range);
    }
    var range = value[0].length;
    var result = [];
    for (var index in value) {
        result[index] = value[index][generateNum(range)];
    }
    return 'You will work ' + result[0] + ' years on ' + result[1] + '.' + '\r\n' +
           'You will live in ' + result[2] + ' and drive ' +  result[3] + '.';
}

console.log(soothsayer([[3, 5, 2, 7, 9],//NESTED ARRAY1
    ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'],//NESTED ARRAY2
    ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'],//NESTED ARRAY3
    ['BMW','Audi', 'Lada', 'Skoda', 'Opel']]));//NESTED ARRAY4