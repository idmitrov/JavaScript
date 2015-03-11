/*
 Write a JavaScript function calcSupply(value) that accepts the following parameters: your age (years),
 your maximum age (years), your favorite food name (e.g. "chocolate"), estimate amount of your favorite food per day (a number).
 The function calculates how many of the food you will eat for the rest of your life
*/

'use strict';

function calcSupply(age, maxAge, foodName, foodAmount) {
    var daysToLife = (maxAge - age) * 365;
    var foodToEat = daysToLife * foodAmount;
    console.log(foodToEat + 'kg of ' + foodName +  ' would be enough until I am ' + maxAge + ' years old.');
}

calcSupply(38, 118, 'chocolate', 0.5); //14600kg of chocolate would be enough until I am 118 years old.
calcSupply(20, 87, 'fruits', 2); //48910kg of fruits would be enough until I am 87 years old.
calcSupply(16, 102, 'nuts', 1.1); //34529kg of nuts would be enough until I am 102 years old.