function createCalculator(defaultNum) {
    let expression = defaultNum;
    return {
        sum: (someNum) => {
            expression += ' + ' + someNum
            return defaultNum += someNum;
        },
        mult: (someNum) => {
            expression += ' * ' + someNum
            return defaultNum *= someNum;
        },
        sub: (someNum) => {
            expression += ' - ' + someNum
            return defaultNum -= someNum;
        },
        div: (someNum) => {
            expression += ' / ' + someNum
            return defaultNum /= someNum;
        },
        log: () => {
            return console.log(name, defaultNum);
        },
        getResult: () => {
            return expression;
        }
    }
}

const calc = createCalculator(10);

/**Для примера*/
calc.sum(5); // 15
calc.mult(10); // 150
calc.sub(40); // 110
calc.div(10); // 11
calc.log();
console.log(calc.getResult());

calc = null