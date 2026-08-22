// arrow functions 
// now  i will differentiate between the normal functiona nd the arrow function
//normal function
function addition1(a: number, b: number): number {
    return a + b;
}

console.log(addition1(10, 20));

//Arrow functions
const addition = (a: number, b: number): number => {
    return a + b;
};

console.log(addition(10, 20));