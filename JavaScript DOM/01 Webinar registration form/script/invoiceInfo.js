'use strict';

function invoiceCheck() {
    var invoiceBtn = document.getElementById('invoice-check'),
        statusArea = document.getElementById('status'),
        hiddenDiv = document.getElementById('invoice-hidden');

    if (invoiceBtn.checked) {
        statusArea.innerText = 'Checked checkbox';
        hiddenDiv.style.visibility = 'visible';
    } else {
        statusArea.innerText = 'Unchecked checkbox';
        hiddenDiv.style.visibility = 'hidden';
    }
}