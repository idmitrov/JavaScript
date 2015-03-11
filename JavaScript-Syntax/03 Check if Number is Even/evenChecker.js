//Write JS program evenChecker.js to check if a few numbers are even.

'use strict';

function isEvenNumber(number) {
    return number % 2 === 0;
}

console.log(isEvenNumber(3)); //false
console.log(isEvenNumber(127)); //false
console.log(isEvenNumber(588)); //true