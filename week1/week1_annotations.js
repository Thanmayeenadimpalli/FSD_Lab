"use strict";
// annotations is a way to explicitly tell the ts what type of variable,parameter or return value should have
// they have: variable type annotation, function parameter annotation, return type annotation,array type and object type annotations
// example for variable type annotation .. (:string, :number, :boolean are type annotators)
let college = "Shri vishnu engineering college for women";
let year = 2001;
let isRunning = true;
// example for function parameter annotation
function faculty(name, experience) {
    console.log(name);
    console.log(experience);
}
faculty("abc", 9);
// example for return type annotation 
function multiply(a, b) {
    return a * b;
}
let ans = multiply(5, 10);
console.log(ans);
//Array annotations
let numbers = [10, 20, 30];
let names = ["India", "Israel", "Russia", "Japan"];
console.log(names);
