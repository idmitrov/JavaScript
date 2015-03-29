'use strict';

var HTMLGen = {
    createParagraph: function(id, text) {

        var parentElement = document.getElementById(id),
            paragraph = document.createElement('p'),
            node = document.createTextNode(text);

        paragraph.appendChild(node);
        parentElement.appendChild(paragraph);
    },

    createDiv: function(id, Class) {
        var parentElement = document.getElementById(id),
            div = document.createElement('div');

        div.className = Class;
        parentElement.appendChild(div);
    },

    createLink: function(id, text, url) {
        var parentElement = document.getElementById(id),
            anchor = document.createElement('a');
        
        anchor.innerHTML = text;
        anchor.href = url;
        parentElement.appendChild(anchor);
    }
};

HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');