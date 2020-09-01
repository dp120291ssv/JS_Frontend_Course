function CreateCalculator(defaultNum) {
    this.expression = [defaultNum];
    this.result = defaultNum;
    this.sum = (someNum) => {
        this.expression.push("+", someNum);
        this.result += someNum;
        return this.result;
    };
    this.mult = (someNum) => {
        this.expression.push("*", someNum);
        this.result *= someNum;
        return this.result;
    };
    this.sub = (someNum) => {
        this.expression.push("-", someNum);
        this.result -= someNum;
        return this.result;
    };
    this.div = (someNum) => {
        this.expression.push("/", someNum);
        this.result /= someNum;
        return this.result;
    };
    this.log = () => {
        return console.log("Итоговое значение: ", this.result);
    };
    this.getResult = () => {
        return this.expression.concat('=', this.result).join(" ");
    };
}
const calc = new CreateCalculator(10);
/**Для примера*/
calc.sum(5); // 15
calc.mult(10); // 150
calc.sub(40); // 110
calc.div(10); // 11
calc.log();
console.log(calc.getResult());