'use strict';

/*
 You are given an array of objects. Your task is to write a JavaScript code that filters out the numbers of that array (removes all non-number objects).
 Then you should:

 1. Find the Min number,
 2. Find the Max number,
 3. Find the most frequent number.

 Finally you should print out the numbers you have found and the filtered array sorted in descending order.
 */

function filterNumbers(arrInput) {
    //FILTER ARRAY FUNCTION
    var filteredArray = arrInput.filter(function (arrIndex) {
        return !isNaN(arrIndex);
    });
    //GET MIN MAX FUNCTION
    function getMinMax(filtredArray, command) {
        var returnValue = 0;
        switch (command) {
            case 'min':
                returnValue = filtredArray.sort(function (currentIndex, nextIndex) {
                    return currentIndex > nextIndex;
                });
                break;
            case 'max':
                returnValue = filtredArray.sort(function (currentIndex, nextIndex) {
                    return currentIndex < nextIndex;
                });
                break;
        }
        return returnValue[0];
    }

    //CALL GET MIN MAX FUNCTION
    var minValue = getMinMax(filteredArray, 'min'),
        maxValue = getMinMax(filteredArray, 'max');
    //MOST FREQUENT FUNCTION
    function getMostFrequent(filteredArray) {
        var count = 0,
            maxCount = 0,
            result = 0;

        for (var i = 0; i < filteredArray.length; i += 1) {
            if (filteredArray[i] === filteredArray[i + 1]) {
                count += 1;
            } else {
                if (count > maxCount) {
                    maxCount = count;
                    result = i;
                }
                count = 0;
            }
        }
        return filteredArray[result];
    }
    var mostFrequent = getMostFrequent(filteredArray);

    //LOG RESULTS
    console.log('Min number: ' + minValue);
    console.log('Max number: ' + maxValue);
    console.log('Most frequent number: ' + mostFrequent);
    console.log(filteredArray);
}

filterNumbers(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", {bunniesCount: 10}, [10, 20,
    30, 40]]);