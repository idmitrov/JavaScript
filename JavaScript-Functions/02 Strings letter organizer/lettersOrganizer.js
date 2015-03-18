'use strict';

function sortLetters(str, bool) {
    var input = str.split('');
    input.sort(function (a, b) {
        return bool ? a.toLowerCase() > b.toLowerCase() : a.toLowerCase() < b.toLowerCase();
    });
    var output = '';
    input.forEach(function(letter) {
        output += letter;
    });
    console.log(output);
}

sortLetters('HelloWorld', true); //'deHllloorW'
sortLetters('HelloWorld', false); //'WroolllHed'