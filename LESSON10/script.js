const addBtn = document.querySelector('#add');
const inputField = document.querySelector('#field');
const items = document.querySelector('#taskList');

addBtn.addEventListener('click', addTask);
items.addEventListener('click', onItemClick);

//добавил создание списка с помощью Enter клавиши
inputField.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
        addTask();
    }
});

function createNewItem(task) {
    const item = document.createElement('li');
    item.classList.add('inProgress');
    item.insertAdjacentHTML('beforeend', `<div class="item-block"><span class="item-text">${task+1}</span><img src="img/delete.png" width=25px class="item-delete"></div>`)
    return item;
}

function addTask() {
    if (inputField.value)
        items.appendChild(createNewItem(inputField.value));
    clearInput();
}

function clearInput() {
    return inputField.value = "";
}

function onItemClick(event) {
    if (event.target.classList.contains('item-block'))
        event.target.classList.toggle('done');
}