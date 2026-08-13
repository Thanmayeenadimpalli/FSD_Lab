//in the line1 we are importing the college which we have imported from the college.ts file
import { College } from "./college";

export class Student extends College {
    studentName: string;

    constructor(name: string) {
        //super() means calling the constructor of the parent class.. here college is the parent class
        super();
        this.studentName = name;
    }

    displayStudent() {
        console.log("Student: " + this.studentName);
        this.displayCollege();
    }
}