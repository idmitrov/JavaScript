'use strict';

/*
 Write a JavaScript function displayProperties() that displays all the properties of the "document" object in alphabetical order.
*/

function displayProperties(doc) {
    var properties = [];
    for (var prop in doc) {
        properties.push(prop);
    }
    return properties.join('\n');
}

console.log(displayProperties(document));

