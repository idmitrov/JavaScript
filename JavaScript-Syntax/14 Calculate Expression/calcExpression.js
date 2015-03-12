'use strict';

function calculate() {
    //INPUT
    var input = document.getElementById('input-text').value,
        //REGEX PATTERNS
        patterDigits = /[0-9]+/,
        patternSymbols = /[+-/*.]+/,

        //FORMULA TO EVAL
        formula = '',
        //IS DIGIT OR SYMBOL
        isPrevLetterDigit = true;

    for (var letter in input) {
        //CURRENT INPUT LETTER
        var currentLetter = input[letter];

        //IF CURRENT LETTER IS '=' BREAK/FORMULA IS DONE
        if (currentLetter === '=') {
            break;
        } else {
            //IF CURRENT LETTER IS VALID DIGIT BETWEEN 0-9
            if (!currentLetter.search(patterDigits)) {
                formula += currentLetter;
                isPrevLetterDigit = true;

            //ELSE IF CURRENT LETTER IS VALID MATH SYMBOL TO EVAL (EXCLUDE =)
            } else if (!currentLetter.search(patternSymbols)) {
                //IF PREV LETTER IS NOT SYMBOL ADD SYMBOL TO FORMULA/OTHERWISE SKIP THE SYMBOL
                if (isPrevLetterDigit == true) {
                    formula += currentLetter;
                }
                isPrevLetterDigit = false;
            }
        }
    }
    //IF FORMULA LENGTH IS GREATER THAN 3
    if (formula.length > 2) {
        //IF FORMULA END WITH NUMBER (E.G 2 + 3 + 5 / 3) CALCULATE
        if (formula.charAt(formula.length -1) != '+' &&
            formula.charAt(formula.length -1) != '-' &&
            formula.charAt(formula.length -1) != '*' &&
            formula.charAt(formula.length -1) != '/') {
            //IF  FORMULA DOES NOT START WITH SYMBOL
            if (formula.charAt(0) != '*' &&
                formula.charAt(0) != '/') {
                document.getElementById('output-text').innerHTML = eval(formula);
            } else {
                //ELSE  FORMULA START WITH SYMBOL REMOVE IT
                formula = formula.substring(1, formula.length);
                document.getElementById('output-text').innerHTML = eval(formula);
            }
        } else {
            //IF FORMULA END WITH SYMBOL (E.G 2 + 3 + 5 / 3+) DELETE THE SYMBOL BEFORE TO CALCULATE
            formula = formula.substring(0, formula.length -1);
            document.getElementById('output-text').innerHTML = eval(formula);
        }
    } else {
        document.getElementById('output-text').innerHTML = 'Incorrect expression!';
    }
}