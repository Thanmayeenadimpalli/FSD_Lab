"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
const teacher_1 = require("./teacher");
let s = new student_1.Student("Thanmayee");
let t = new teacher_1.Teacher("J. Pradeep");
s.displayStudent();
t.displayTeacher();
