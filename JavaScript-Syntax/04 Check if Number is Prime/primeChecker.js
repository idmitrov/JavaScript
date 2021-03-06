//Write a JavaScript function isPrime(value) that checks if an integer number is prime.

'use strict';

function isPrime(value) {
    var isPrimeNum = true;
    if (value < 2) {
        isPrimeNum = false;
    } else if (value > 2) {
        for (var i = 2; i < Math.sqrt(value); i += 1) {
            if (value % i === 0) {
                isPrimeNum = false;
                break;
            }
        }
    }
    return isPrimeNum;
}
console.log(isPrime(7)); //true
console.log(isPrime(254)); //false
console.log(isPrime(587)); //true