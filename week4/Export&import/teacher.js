"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const college_1 = require("./college");
class Teacher extends college_1.College {
    teacherName;
    constructor(name) {
        super();
        this.teacherName = name;
    }
    displayTeacher() {
        console.log("Teacher: " + this.teacherName);
        this.displayCollege();
    }
}
exports.Teacher = Teacher;
