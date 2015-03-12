/*
 Write a script that enters the coefficients a, b and c of a quadratic equation a*x2 + b*x + c = 0 and
 calculates and prints its real roots. Note that quadratic equations may have 0, 1 or 2 real roots.
*/

'use strict';

function findRots(a, b, c) {
    if (a == 0) {
        console.log('a = 0, means that the equation is not quadratic')
    } else {
        var discriminant = Math.pow(b, 2) - 4 * a * c,
            xOne = (-b - Math.sqrt(discriminant)) / (2 * a),
            xTwo = (-b + Math.sqrt(discriminant)) / (2 * a);

        if (discriminant < 0) {
            console.log('No real roots')
        } else if (discriminant === 0) {
            console.log('X = ' + xOne);
        } else {
            console.log('X1 = ' + xOne + '\r\n' + 'X2 = ' + xTwo);
        }
    }
}
findRots(2, 5, -3); //X1 = -3 X2 = 0.5
findRots(2, -4, 2); //X = 1
findRots(4, 2, 1); //No real roots