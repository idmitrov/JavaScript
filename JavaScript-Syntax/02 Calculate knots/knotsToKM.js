/*
 Write a JavaScript function that accepts a number variable to convert from km/h to knots
 (knot is a maritime unit measuring speed). The result should be printed on the console,
 rounded up to the second sign after the decimal point.
 */

'use strict';

function speedConverter(valule) {
    var defaultMeasure = 1.852,
        convertedMeasure = valule / defaultMeasure;
        return convertedMeasure.toFixed(2);
}

console.log(speedConverter(20));
console.log(speedConverter(112));
console.log(speedConverter(400));