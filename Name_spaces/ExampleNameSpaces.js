"use strict";
//namespaces is a way to group related variables ,functions, classes under one name..
//namespaces are more common in older typescripts in modern ts we mostly use import/export..
//example of namespace with a  class.
var Student;
(function (Student) {
    class User {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            console.log(`Hello, ${this.name}`);
        }
    }
    Student.User = User;
})(Student || (Student = {}));
const user = new Student.User("Thanmayee", 20);
user.greet();
