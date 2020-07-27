let operationType = null;
let countOfArgument = null;
let isCorrectAnswer = false;
let str = null;
let myArr = [];

askAndCheckOperationType();
askAndCheckCountOfArgument();
writeArgument();
createFinishMsg();

function askAndCheckOperationType() {
    do {
        operationType = prompt('Какое из перечисленных действий вы хотите выполнить: add, sub, mult, div')
        if (operationType == 'add' || operationType == 'sub' || operationType == 'mult' || operationType == 'div') {
            isCorrectAnswer = true;
        }
    } while (isCorrectAnswer == false);
}


function askAndCheckCountOfArgument() {
    do {
        countOfArgument = +prompt('Укажите число аргументов для вычисления: от 1 до 7')
        if (countOfArgument > 0 & countOfArgument < 8) {
            isCorrectAnswer = true;
        }
    } while (isCorrectAnswer == false)
}

function writeArgument() {
    myArr = new Array(countOfArgument);
    console.log('countOfArgument ' + countOfArgument)
    for (let i = 0, J = myArr.length; i < J;) {
        argNumber = prompt('Укажите число');
        if (isNaN(argNumber) || (argNumber === null) || (argNumber === '')) {
            argNumber;
            console.log('argNumber: ' + argNumber)
        } else {
            myArr[i] = argNumber;
            i++
            console.log('i: ' + i)
        }
    }
}

function calculateTotalAdd() {
    let sum = 0;
    for (let i = 0; i < myArr.length; i++) {
        sum += parseInt(myArr[i]);
    }
    return sum;
}

function calculateTotalSub() {
    let sub = myArr[0];
    for (let i = 1; i < myArr.length; i++) {
        sub = sub - parseInt(myArr[i]);
    }
    return sub;
}

function calculateTotalMult() {
    let mult = 1;
    for (let i = 0; i < myArr.length; ++i) {
        mult = mult * parseInt(myArr[i]);
    }
    return mult;
}

function calculateTotalDiv() {
    let div = myArr[0];
    for (let i = 1; i < myArr.length; ++i) {
        div = div / parseInt(myArr[i]);
    }
    return div;
}

function createFinishMsg() {
    switch (operationType) {
        case 'add':
            operationType = ' + '
            str = myArr.join(operationType);
            console.log('operation: add')
            alert(str + ' = ' + calculateTotalAdd())
            break;
        case 'sub':
            operationType = ' - '
            str = myArr.join(operationType);
            console.log('operation: sub')
            alert(str + ' = ' + calculateTotalSub())
            break;
        case 'mult':
            operationType = ' * '
            str = myArr.join(operationType);
            console.log('operation: mult')
            alert(str + ' = ' + calculateTotalMult())
            break;
        case 'div':
            operationType = ' / '
            str = myArr.join(operationType);
            console.log('operation: div')
            alert(str + ' = ' + calculateTotalDiv())
            break;
    }
}