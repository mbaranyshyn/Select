var options = {
    option1: '',
    input1: '',
    option2: '',
    input2: ''
};

document.querySelectorAll('a').forEach(function(item) {
    item.addEventListener("click", function() {
        removeSelected(document.querySelectorAll('a'));
        selectOption(this);
    });
});

function selectOption(option) {
    option.classList.add('selected');

    if (isDescendant(document.getElementById('option_1'), option)) {
        options.option1 = option.innerText;
        document.querySelector('#option_1 > li > a').innerText = options.option1;
        document.getElementById('option1').style.display = 'inline';
    } else {
        options.option2 = option.innerText;
        document.querySelector('ul#option_2 > li > a').innerText = options.option2;
        document.getElementById('option2').style.display = 'inline';
    }
}

function removeSelected(items) {
    items.forEach(function(item) {
        item.classList.remove('selected');
    });
}

function isDescendant(parent, child) {
    var node = child.parentNode;

    while (node != null) {
        if (node == parent) {
            return true;
        }

        node = node.parentNode;
    }

    return false;
}

function search() {
    options.input1 = document.getElementById('option1').value;
    options.input2 = document.getElementById('option2').value;

    document.getElementById('options').innerHTML = options.option1 + ": " + options.input1 + "<br>" + options.option2 + ": " + options.input2;
}