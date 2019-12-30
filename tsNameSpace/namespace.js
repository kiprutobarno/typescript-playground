var StudentSetup;
(function (StudentSetup) {
    class Student {
        constructor(studentDetails) {
            this.name = studentDetails.name;
            this.age = studentDetails.age;
        }
        getName() {
            return this.name;
        }
    }
    StudentSetup.Student = Student;
})(StudentSetup || (StudentSetup = {}));
let a = new StudentSetup.Student({ name: "Kipruto Barno", age: 30 });
console.log(a.getName());
