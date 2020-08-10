getNaturalNumbersArr(5)

function getNaturalNumbersArr(argument) {
    let arrNaturalNumber = []
    for (let i = 2; i < argument; i++) {
        if (!isNaturalNumber(i)) continue;
        arrNaturalNumber.push(i);

    }
    return alert(arrNaturalNumber)
}

function isNaturalNumber(argument) {
    for (let i = 2; i < argument; i++) {
        if (argument % i == 0) return false;
    }
    return true;
}