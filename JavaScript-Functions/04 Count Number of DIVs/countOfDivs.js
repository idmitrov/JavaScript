'use strict';

//Write a JavaScript function countDivs(html) to count the number of all DIVs in given HTML fragment passed as string.

function countDivs(html) {
    var count = 0,
        currentIndex = 0,
        nextIndex = 0;

    while (currentIndex > -1) {
        currentIndex = html.indexOf('<div', nextIndex);
        nextIndex = currentIndex + 1;
        //IF CURRENT INDEX REACH -1 DO NOT COUNT
        currentIndex > -1 ? count += 1 : count;
    }
    console.log(count);
}


//CALL THE FUNCTION by PASSING STRING WITH HTML STRUCTURE
//RETURN 7 (NUMBER OF DIVs)
countDivs('<!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title>index</title><script src="/yourScript.js" defer></script></head><body><div id="outerDiv"><div class="first"><div><div>hello</div></div></div><div>hi<div></div></div><div>I am a div</div></div></body></html>');