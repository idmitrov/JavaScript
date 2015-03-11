//Write a JavaScript function convertKWtoHP(value) to convert car’s kW into hp (horse power).

'use strict';

function convertToHP(kw) {
    var hp = 0.745699872;
    var result =  kw / hp;

    //ROUND TO THE SECOND DIGIT AFTER THE DECIMAL POINT
    return result.toFixed(2); // Math.round(result * 100) / 100 RETURN NUMBER TYPE
}

console.log(convertToHP(75)); //100.58
console.log(convertToHP(150)); //201.15
console.log(convertToHP(1000)); //1341.02