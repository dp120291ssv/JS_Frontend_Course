const addBtn = document.querySelector('#add');
const inputField = document.querySelector('#field');
const items = document.querySelector('#taskList');
const btnDeleteAll = document.querySelector('#del');

addTaskProccess();
setEnterKeyHendler();

function addTask() {
    if (inputField.value)
        items.appendChild(createNewItem(inputField.value));
}

function createNewItem(task) {
    const item = document.createElement('li');
    item.insertAdjacentHTML('beforeend', `<div class="item-block"><span class="item-text">${task}</span><img src="img/delete.png" width=25px class="item-delete"></div>`)
    clearInput();
    setDeleteHandler();
    setDeleteAllHandler();
    setStatusHendler();
    return item;
}

function clearInput() {
    return inputField.value = "";
}

function setEnterKeyHendler() {
    inputField.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            addTask();
        }
    });
}

function addTaskProccess() {
    addBtn.addEventListener('click', addTask);
}

function setStatusHendler() {
    items.addEventListener('click', changeStatus);
}

function setDeleteAllHandler() {
    btnDeleteAll.addEventListener('click', deleteAllElement);
}

function setDeleteHandler() {
    const deleteButtons = document.getElementsByClassName('item-delete');
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', deleteElement);
    }
}

function changeStatus(event) {
    if (event.target.classList.contains('item-block'))
        event.target.classList.toggle('done');
}

function deleteElement(e) {
    e.target.parentNode.parentNode.remove()
}

function deleteAllElement() {
    items.innerHTML = '';
}