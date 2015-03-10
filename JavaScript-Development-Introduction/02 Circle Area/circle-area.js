'use strict'

var r = 7;
function calcCircleArea(r) {
    return Math.PI * Math.pow(r, 2);
}
var values = [7, 1.5, 20];

for (var value in values) {
    var area = calcCircleArea(values[value]);
    document.write("r=" + values[value] + ";" + "area= " + area + "<br><br>");
}