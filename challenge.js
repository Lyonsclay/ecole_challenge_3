var itemForm = document.querySelector('#itemForm');
var ul = document.querySelector('#list');

function addButton(button) {
    "use strict";

    button.innerHTML = "Remove";

    button.addEventListener('click', function () {
        button.parentNode.remove();
    });
}

function addListNode(input, button) {
    "use strict";

    var li = document.createElement('li');

    li.innerHTML = input;
    li.appendChild(button);
    ul.appendChild(li);
}

function addToList() {
    "use strict";

    var itemInput = itemForm.querySelector('#itemInput');
    var input = itemInput.value;
    var button = document.createElement('button');

    addButton(button);

    addListNode(input, button);

    itemInput.value = '';
}

document.onreadystatechange = function () {
    "use strict";

    if (document.readyState === 'complete') {
        itemForm.addEventListener('submit', function () {
            event.preventDefault();
            addToList();
        });
    }
};
