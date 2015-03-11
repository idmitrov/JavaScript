/*
 Write a JavaScript function treeHouseCompare(value) that accepts the following parameters: integers a and b.
 The function compares the area of the house and the area of the tree (Figure 1)
 and returns the name of the figure with bigger area (house or tree) and the value of the area.
*/

'use strict';

function treeHouseCompare(a, b) {
    var houseArea = Math.pow(a, 2) + (a * b) / 2;
    var treeArea = b * (b / 3) + Math.PI * Math.pow(b * 2 / 3, 2);
    return houseArea > treeArea ? 'house/' + houseArea.toFixed(2) : 'tree/' +  treeArea.toFixed(2);
}

console.log(treeHouseCompare(3, 2)); //house/12.00
console.log(treeHouseCompare(3, 3)); //tree/15.57
console.log(treeHouseCompare(4, 5)); //tree/43.24