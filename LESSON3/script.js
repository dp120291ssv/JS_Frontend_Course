const operationType = prompt('Какое из перечисленных действий вы хотите выполнить: add, sub, mult, div')
console.log(`Выбрано действие: ${operationType}`)

let firstArgument = prompt('Укажите первое число')
let secondArgument = prompt('Укажите второе число')
let result;

switch (operationType) {
    case 'add':
        result = Number(firstArgument) + Number(secondArgument)
        alert(`${firstArgument} + ${secondArgument} = ${result}`);
        break;
    case 'sub':
        result = Number(firstArgument) - Number(secondArgument)
        alert(`${firstArgument} - ${secondArgument} = ${result}`);
        break;
    case 'mult':
        result = Number(firstArgument) * Number(secondArgument)
        alert(`${firstArgument} * ${secondArgument} = ${result}`);
        break;
    case 'div':
        result = Number(firstArgument) / Number(secondArgument)
        alert(`${firstArgument} / ${secondArgument} = ${result}`);
        break;
    default:
        alert('Вы ввели недопустимое значение операции')
}