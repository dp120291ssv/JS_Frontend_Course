let number;
arrNaturalNumber = []

getNaturalNumberArr(20);

function getNaturalNumberArr(number) {
    nexStep: for (let i = 2; i <= number; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nexStep;

        }
        arrNaturalNumber.push(i);
    }
    return alert(`natural numbers: ${arrNaturalNumber}`)
}