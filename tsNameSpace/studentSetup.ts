namespace StudentSetup {
  export interface StudentDetails {
    name: string;
    age: number;
  }
  export class Student implements StudentDetails {
    name: string;
    age: number;

    constructor(studentDetails: StudentDetails) {
      this.name = studentDetails.name;
      this.age = studentDetails.age;
    }

    getName(): string {
      return this.name;
    }
  }
}
