const addBtn = document.querySelector('#add');
const dltBtn = document.querySelector('#add');
const inputField = document.querySelector('#field');
const items = document.querySelector('#taskList');
const deleteBtn = document.querySelector('.item-delete')

addBtn.addEventListener('click', addTask);
dltBtn.addEventListener('click', deleteItem);
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
    item.insertAdjacentHTML('beforeend', `<li><div class="item-block"><span class="item-text">${task}</span><img src="img/delete.png" width=25px class="item-delete"></div></li>`)
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

function deleteItem() {

    // const itemsList = document.querySelectorAll('#taskList');

    // let tab = [],
    //     liIndex;

    // for (const i = 0; i < itemsList.length; i++) {
    //     tab.push(items[i].innerHTML)
    // }

    // for (const i = 0; i < itemsList.length; i++) {
    //     itemsList[i].onItemClick = function() {
    //         liIndex = tab.indexOf(this.innerHTML);
    //     }
    // }
}