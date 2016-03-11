document.onreadystatechange = function () {
    
    if (document.readyState === 'complete') {
        var list = [],
            listForm = document.querySelector('#addItem'),
            ul = document.querySelector('#list'),
            input = listForm.querySelector('input');


        addItem.addEventListener('submit', function (event) {
            event.preventDefault();
            addToList();
        });

        var addToList = function () {
            var item = addItem.querySelector('input').value,
                newItem = listForm.querySelector.innerHTML,
                li = document.createElement('li'),
                button = document.createElement('button');

            button.innerHTML = "Remove";
            input.value = '';

            button.addEventListener('click', function(event) {
                this.parentNode.remove();
            })

            list.push(item);
            li.innerHTML = item;
            li.appendChild(button);
            ul.appendChild(li);
        };
    }
}
