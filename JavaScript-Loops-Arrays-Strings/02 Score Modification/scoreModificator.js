'use strict';

/*
 You are given an array of numbers. Your tasks are to:
 first filter out all valid exam scores (between 0 and 400) and
 afterwards scale them downwards by removing 20% out of each score.
 Finally you should print out the changed scores sorted in ascending order.
 */

function modifyScore(arrInput) {
    //filter out all valid exam scores (between 0 and 400)
    var arrFiltered = arrInput.filter(function (element) {
        return !isNaN(element) && element >= 0 && element <= 400
    });

    //scale them downwards by removing 20% out of each score.
    arrFiltered = arrFiltered.map(function(element) {
        return element - (element / 100) * 20;
    });

    //print out the changed scores sorted in ascending order.
    arrFiltered = arrFiltered.sort(function(currentIndex, nextIndex) {
        return currentIndex > nextIndex;
    });
    console.log(arrFiltered);
}

modifyScore([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]); //[ 18.4, 53.6, 96, 136, 160, 169.6, 280 ]
