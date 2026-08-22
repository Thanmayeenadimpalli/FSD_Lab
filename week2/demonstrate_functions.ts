// In this experiment we are going to demonstrate the functions, parameters and the return types.
// parameterised parameter and returns
//it takes the input number and returns number
function example(age:number): number{
    return age;
}
console.log(example(19));

//Default parameters: if the user doesntg give any of the input then the function takes the default one
function place(town: string="Bhimavaram"): string{
    return `Your village is ${town}`;
}
console.log(place("Mogallu"));

//Optional parameters
// ? this is one of the optional parameter it means "this parameter is optional". that means we can call the function with or without that parameter
function greet(name: string, age?: number) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}

greet("Thanmayee", 20);
greet("Thanmayee");     

//Rest parameters(...)
// ... this means a function can accept any number of arguemnets and stores them as an array

function add(...numbers: number[]): number {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(add(10, 20, 30, 40, 50));