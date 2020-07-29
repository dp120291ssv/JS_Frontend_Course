let operationType = null;
let operationTypeSymbol = null;
let countOfArgument = null;
let resultString = null;
let myArr = [];

askAndCheckOperationType();
askAndCheckCountOfArgument();
writeArgument();
createFinishMsg();

function askAndCheckOperationType() {
    do {
        operationType = prompt('Какое из перечисленных действий вы хотите выполнить: add, sub, mult, div')
    } while (!(operationType == 'add' || operationType == 'sub' || operationType == 'mult' || operationType == 'div'));
}

function askAndCheckCountOfArgument() {
    do {
        countOfArgument = +prompt('Укажите число аргументов для вычисления: от 1 до 7')
    } while (countOfArgument < 1 || countOfArgument > 8 || isNaN(countOfArgument))
}

function writeArgument() {
    myArr = new Array(countOfArgument);
    for (let i = 0; i < myArr.length;) {
        argNumber = prompt('Укажите число');
        if (!(isNaN(argNumber) || (argNumber === null) || (argNumber === ''))) {
            myArr[i] = +argNumber;
            i++
        }
    }
}

function calculateTotalAdd() {
    let sum = 0;
    for (let i = 0; i < myArr.length; i++) {
        sum += myArr[i];
    }
    return sum;
}

function calculateTotalSub() {
    let sub = myArr[0];
    for (let i = 1; i < myArr.length; i++) {
        sub = sub - myArr[i];
    }
    return sub;
}

function calculateTotalMult() {
    let mult = 1;
    for (let i = 0; i < myArr.length; ++i) {
        mult = mult * myArr[i];
    }
    return mult;
}

function calculateTotalDiv() {
    let div = myArr[0];
    for (let i = 1; i < myArr.length; ++i) {
        div = div / myArr[i];
    }
    return div;
}

function createFinishMsg() {
    switch (operationType) {
        case 'add':
            operationTypeSymbol = ' + '
            resultString = myArr.join(operationTypeSymbol);
            alert(resultString + ' = ' + calculateTotalAdd())
            break;
        case 'sub':
            operationTypeSymbol = ' - '
            resultString = myArr.join(operationTypeSymbol);
            alert(resultString + ' = ' + calculateTotalSub())
            break;
        case 'mult':
            operationTypeSymbol = ' * '
            resultString = myArr.join(operationTypeSymbol);
            alert(resultString + ' = ' + calculateTotalMult())
            break;
        case 'div':
            operationTypeSymbol = ' / '
            resultString = myArr.join(operationTypeSymbol);
            alert(resultString + ' = ' + calculateTotalDiv())
            break;
    }
}