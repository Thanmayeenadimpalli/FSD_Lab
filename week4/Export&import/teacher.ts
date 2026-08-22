import { College } from "./college";

export class Teacher extends College {
    teacherName: string;

    constructor(name: string) {
        super();
        this.teacherName = name;
    }

    displayTeacher() {
        console.log("Teacher: " + this.teacherName);
        this.displayCollege();
    }
}