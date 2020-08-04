let index = 0;
let arr = []
const students = [{
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]

averageStudentMark(2);
averageGroupMark();

function getSumMark() {
    let allSumMarks = [];
    for (let i = 0; students.length > i; i++) {
        allSumMarks.push(getReduceArr(students[i].marks));
    }
    allSumMarks = getReduceArr(allSumMarks);
    return allSumMarks;
}

function getCountOfMark() {
    let countOfAllMarks = [];
    for (let i = 0; students.length > i; i++) {
        countOfAllMarks.push(students[i].marks.length)
    }
    countOfAllMarks = getReduceArr(countOfAllMarks);
    return countOfAllMarks;
}

function getReduceArr(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function averageGroupMark() {
    return alert("Общая средняя оценка студентов: " + getSumMark() / getCountOfMark());
}

function averageStudentMark(index) {
    let sum = getReduceArr(students[index].marks);
    return alert(`Средняя оценка студента ${students[index].name} = ` + sum / students[index].marks.length);
}