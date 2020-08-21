function createCalculator(counts) {
    return {
        sum: function(someNum) {
            counts += someNum;
        },
        mult: function(someNum) {
            counts *= someNum;
        },
        div: function(someNum) {
            counts /= someNum;
        },
        set: function() {
            counts = 0;
        },
        log: function() {
            console.log(name, counts);
        }
    }
    return counts;
}

const calc = createCalculator(10);

/**Для примера*/
calc.sum(10);
// calc.sum(5);
// calc.mult(10);
// calc.mult(2);
// calc.sum(33);
// calc.div(3);
// calc.set();
// calc.sum(200);
// calc.mult(1.5);
// calc.div(60);
// calc.set();
calc.log();