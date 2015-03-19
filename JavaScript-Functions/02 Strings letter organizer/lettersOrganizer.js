'use strict';

/*
 Write a JavaScript function sortLetters(string, boolean) that gets as an input a string and a boolean.\
 The function sorts all letters in the string in alphabetical order and returns the newly formed string.
 The sorting is ascending if the boolean is true otherwise the sorting is in descending order.
 Note: The sorting is case-insensitive but the output should use the same casing as the input!
 Hint: You are allowed to use .sort() function.
 */


function sortLetters(str, bool) {
    var input = str.split('');
    input.sort(function (currentLetter, nextLetter) {
        return bool ? currentLetter.toLowerCase() > nextLetter.toLowerCase() : currentLetter.toLowerCase() < nextLetter.toLowerCase();
    });
    var output = '';
    input.forEach(function(letter) {
        output += letter;
    });
    console.log(output);
}

sortLetters('HelloWorld', true); //'deHllloorW'
sortLetters('HelloWorld', false); //'WroolllHed'