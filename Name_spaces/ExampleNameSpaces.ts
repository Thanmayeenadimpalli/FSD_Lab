//namespaces is a way to group related variables ,functions, classes under one name..
//namespaces are more common in older typescripts in modern ts we mostly use import/export..
//example of namespace with a  class.
namespace Student {
    export class User {
        constructor(
            public name: string,
            public age: number
        ) {}

        greet(): void {
            console.log(`Hello, ${this.name}`);
        }
    }
}

const user = new Student.User("Thanmayee", 20);

user.greet();