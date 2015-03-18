/*
 Write a JavaScript function replaceATag(str)
 that replaces in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].
 Write JS program aTagReplacer.js that invokes your function with the sample input data below and prints the output at the console.
*/

'use strict';

function replaceATag(str) {
    var openingTag = /<a href=/g,
        closingTag = /<\/a>/g;
    str = str.replace(openingTag, '[URL href=');
    str = str.replace(closingTag, '[/URL]');

    console.log(str);
}

replaceATag('<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>');
//<ul><li>[URL href=http://softuni.bg]SoftUni[/URL]</li></ul>
