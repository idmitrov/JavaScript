'use strict'

function roundNumber(value) {
    console.log(value + " Rounded using Math.floor " + Math.floor(value));
    console.log(value + " Rounded using Math.round " + Math.round(value) + "\r\n");
}

roundNumber(22.7); // 22 23
roundNumber(12.3); // 12 12
roundNumber(58.7); // 58 59