//скопировать этот объект в новый объект
const obj = { name: 'Alex', age: 33, adress: { country: 'UA', city: 'Dnipro' } }

//копирование сделать при помощи вызова данной функции
const objCopy = copy(obj);

//реализация
function copy(someObj) {
    let newObj = JSON.parse(JSON.stringify(someObj));
    return newObj;
}
console.log(copy(obj));