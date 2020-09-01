function СreateCalculator(defaultNum) {
    let expression = defaultNum;
    this.sum = (someNum) => {
            expression += ' + ' + someNum
            return defaultNum += someNum;
        },
        this.mult = (someNum) => {
            expression += ' * ' + someNum
            return defaultNum *= someNum;
        },
        this.sub = (someNum) => {
            expression += ' - ' + someNum
            return defaultNum -= someNum;
        },
        this.div = (someNum) => {
            expression += ' / ' + someNum
            return defaultNum /= someNum;
        },
        this.log = () => {
            return console.log("Итоговое значение: ", defaultNum);
        },
        this.getResult = () => {
            return expression;
        }
}


const calc = new СreateCalculator(10);

/**Для примера*/
calc.sum(5); // 15
calc.mult(10); // 150
calc.sub(40); // 110
calc.div(10); // 11
calc.log();
console.log(calc.getResult());