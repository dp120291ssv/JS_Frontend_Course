function createCalculator(counts) {
    return {
        sum: function(someNum) {
            counts += someNum;
        },
        mult: function(someNum) {
            counts *= someNum;
        },
        sub: function(someNum) {
            counts -= someNum;
        },
        div: function(someNum) {
            counts /= someNum;
        },
        set: function(someNum) {
            counts = someNum;
        },
        log: function() {
            console.log(name, counts);
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