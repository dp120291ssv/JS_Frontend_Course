function Student(studentName, listOfRating) {
    this.studentName = studentName,
    this.listOfRating = listOfRating
}

Student.prototype.averageMark = function(){
    return this.studentName + " = " + this.listOfRating.reduce((sum, current) => sum + current) / this.listOfRating.length;
}

const ivan = new Student('Student 1', [4, 10, 16]);
console.log(ivan.averageMark());
 



