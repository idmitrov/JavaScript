'use strict';

function validateEmail() {
    var input = document.getElementById('inputEmail').value,
        output = document.getElementById('outputEmail'),
        validation = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        status = document.getElementById('statusBar');

    output.innerText = input;
    if (input.match(validation)) {
        output.style.backgroundColor = '#90EE90';
        status.innerText = 'Valid email';
    } else {
        output.style.backgroundColor = '#F00';
        status.innerText = 'Invalid email';
    }
}