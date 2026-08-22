"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
//in the line1 we are importing the college which we have imported from the college.ts file
const college_1 = require("./college");
class Student extends college_1.College {
    studentName;
    constructor(name) {
        //super() means calling the constructor of the parent class.. here college is the parent class
        super();
        this.studentName = name;
    }
    displayStudent() {
        console.log("Student: " + this.studentName);
        this.displayCollege();
    }
}
exports.Student = Student;
