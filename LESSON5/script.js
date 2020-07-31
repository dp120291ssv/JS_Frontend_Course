let operationType = null;
let operationTypeSymbol = null;
let argumentsArr = [];
let resultString = null;

askAndCheckOperationType();
askAndWriteArguments();
createFinishMsg();

function askAndCheckOperationType() {
    do {
        operationType = prompt('Какое из перечисленных действий вы хотите выполнить: add, sub, mult, div')
    } while (!(operationType == 'add' || operationType == 'sub' || operationType == 'mult' || operationType == 'div'));
}

function askAndWriteArguments() {
    do {
        let input = prompt("Укажите числа для вычисления: ");
        if (input) {
            argumentsArr = input
                .split(" ")
                .filter(item => !!item)
                .map(item => +item)
        }
    } while (!argumentsArr.length || !argumentsArr.every(item => !isNaN(item)));
}

function calculateTotalAdd() {
    let sum = 0;
    for (let i = 0; i < argumentsArr.length; i++) {
        sum += argumentsArr[i];
    }
    return sum;
}

function calculateTotalSub() {
    let sub = argumentsArr[0];
    for (let i = 1; i < argumentsArr.length; i++) {
        sub = sub - argumentsArr[i];
    }
    return sub;
}

function calculateTotalMult() {
    let mult = 1;
    for (let i = 0; i < argumentsArr.length; ++i) {
        mult = mult * argumentsArr[i];
    }
    return mult;
}

function calculateTotalDiv() {
    let div = argumentsArr[0];
    for (let i = 1; i < argumentsArr.length; ++i) {
        div = div / argumentsArr[i];
    }
    return div;
}

function createFinishMsg() {
    switch (operationType) {
        case 'add':
            operationTypeSymbol = ' + '
            resultString = argumentsArr.join(operationTypeSymbol);
            alert(resultString + ' = ' + calculateTotalAdd())
            break;
        case 'sub':
            operationTypeSymbol = ' - '
            resultString = argumentsArr.join(operationTypeSymbol);
            alert(resultString + ' = ' + calculateTotalSub())
            break;
        case 'mult':
            operationTypeSymbol = ' * '
            resultString = argumentsArr.join(operationTypeSymbol);
            alert(resultString + ' = ' + calculateTotalMult())
            break;
        case 'div':
            operationTypeSymbol = ' / '
            resultString = argumentsArr.join(operationTypeSymbol);
            alert(resultString + ' = ' + calculateTotalDiv())
            break;
    }
}