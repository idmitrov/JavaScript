/*
 Write a JavaScript function calcCylinderVol(value) that accepts the following parameters:
 radius and the height of a straight circular cylinder.
 The function calculates the volume of the cylinder.
*/

'use strict';

function calcCylinderVol(radius, height) {
    var volume = Math.PI * Math.pow(radius, 2) * height;
    console.log(Math.round(volume * 1000) / 1000);
}

calcCylinderVol(2, 4); //50.265
calcCylinderVol(5, 8); //628.319
calcCylinderVol(12, 3); //1357.168