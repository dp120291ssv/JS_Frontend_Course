const addBtn = document.querySelector('#add');
const inputField = document.querySelector('#field');
const listItems = document.querySelector('#taskList');

function createNewItem(task) {
    let item = document.createElement('li');
    let itemText = document.createElement('span');
    itemText.innerText = task;
    item.appendChild(itemText);
    return item;
}

function addTask() {
    if (inputField.value) {
        listItems.appendChild(createNewItem(inputField.value));
        inputField.value = "";
    }
}

addBtn.addEventListener('click', addTask);