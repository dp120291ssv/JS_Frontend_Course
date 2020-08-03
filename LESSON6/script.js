let index = 0;
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

function averageGroupMark() {
    let allSumMarks = [];
    for (let i = 0; students.length > i; i++) {
        allSumMarks.push(students[i].marks.reduce((a, b) => a + b) / students[i].marks.length);
        console.log("i: " + i + " totalSum: " + allSumMarks)
    }
    return alert("Общая средняя оценка студентов: " + allSumMarks.reduce((a, b) => a + b, 0) / students.length);
}

function averageStudentMark(index) {
    let sum = students[index].marks.reduce((a, b) => a + b, 0);
    return alert(`Средняя оценка студента ${students[index].name} = ` + sum / students[index].marks.length);
}