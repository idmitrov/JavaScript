'use strict';
//Write a JavaScript function divisionBy3(value)
//that finds the sum of digits of integer number n (n > 9)
// and checks if the sum is divided by 3 without remainder.

function divisionBy3(value) {
    if(value > 9) {
        var sum = 0;
        while (value > 0) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }

        if (sum % 3 === 0) {
            console.log('the number is divided by 3 without remainder');
        } else {
            console.log('the number is not divided by 3 without remainder');
        }
    } else {
        throw ('expected input a number greater than 9')
    }
}

divisionBy3(12);//the number is divided by 3 without remainder
divisionBy3(188);//the number is not divided by 3 without remainder
divisionBy3(591);//the number is divided by 3 without remainder