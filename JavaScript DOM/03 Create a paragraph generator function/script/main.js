function createParagraph(id, text) {
    var parentElement = document.getElementById(id),
        paragraph = document.createElement('p'),
        node = document.createTextNode(text);

    paragraph.appendChild(node);
    parentElement.appendChild(paragraph);
}

createParagraph('wrapper', 'Some text');