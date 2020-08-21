function createCalculator(defaultNum) {
    return {
        sum: function(someNum) {
            return defaultNum += someNum;
        },
        mult: function(someNum) {
            return defaultNum *= someNum;
        },
        sub: function(someNum) {
            return defaultNum -= someNum;
        },
        div: function(someNum) {
            return defaultNum /= someNum;
        },
        set: function(someNum) {
            return defaultNum = someNum;
        },
        log: function() {
            return console.log(name, defaultNum);
        }
    }
}

const calc = createCalculator(10);

/**Для примера*/
calc.sum(5); // 15
calc.mult(10); // 150
calc.sub(40); // 110
calc.div(10); // 11
calc.set(100); // 100
calc.log();