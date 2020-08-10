let number;
arrNaturalNumber = []

getNaturalNumberArr(20);

function getNaturalNumberArr(number) {
    nexStep: for (let i = 2; i <= number; i++) { // Для всех i...
        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue nexStep; // не подходит, берём следующее

        }
        arrNaturalNumber.push(i);
    }
    return alert(`natural numbers: ${arrNaturalNumber}`)
}