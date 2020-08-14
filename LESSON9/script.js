const addBtn = document.querySelector('#add');
const inputField = document.querySelector('#field');
const listItems = document.querySelector('#taskList');

function createNewItem(task) {
    let item = document.createElement('li');
    let span = document.createElement('span');
    span.innerText = task;
    item.appendChild(span);
    return item;
}

function addTask() {
    console.log("value: " + inputField.value)
    if (inputField.value) {
        let item = createNewItem(inputField.value);
        listItems.appendChild(item);
        inputField.value = "";
    }
}

addBtn.addEventListener('click', addTask);