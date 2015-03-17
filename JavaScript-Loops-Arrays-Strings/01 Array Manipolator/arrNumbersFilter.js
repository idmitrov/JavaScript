'use strict';

/*
 You are given an array of objects. Your task is to write a JavaScript code that filters out the numbers of that array (removes all non-number objects).
 Then you should:

 1. Find the Min number,
 2. Find the Max number,
 3. Find the most frequent number.

 Finally you should print out the numbers you have found and the filtered array sorted in descending order.
 */

function filterNumbers(arr) {
    for (var index in arr) {
        //DELETE NON NUMBER OBJECTS
        if (typeof(arr[index]) !== 'number') {
            //delete arr[index];
            delete arr[index];
        }
    }
    //SORT AND FIND MIN MAX
    function getMinMax(arr, command) {
        switch (command) {
            case 'min':
                arr.sort(function(a, b) {
                    return a - b;
                });
                break;
            case 'max':
                arr.sort(function(a, b) {
                    return b - a;
                });
                break;
        }
        return arr[0];
    }
    //FIND MOST FREQUENT NUMBER
    function getMostFrequent(arr) {
        var count = 0,
            maxCount = 0,
            result = 0;

        for (var i = 0; i < arr.length; i += 1) {
            if (arr[i] === arr[i + 1]) {
                count += 1;
            } else {
                if (count > maxCount) {
                    maxCount = count;
                    result = i;
                }
                count = 0;
            }
        }
        return arr[result];
    }

    var minValue = getMinMax(arr, 'min'),
        maxValue = getMinMax(arr, 'max'),
        mostFrequent = getMostFrequent(arr);

    console.log('Min number: ' + minValue);
    console.log('Max number: ' + maxValue);
    console.log('Most frequent number: ' + mostFrequent);

    //TO FIX...
    console.log(arr);
}

filterNumbers(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", {bunniesCount: 10}, [10, 20, 30, 40]]);