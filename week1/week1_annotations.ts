// annotations is a way to explicitly tell the ts what type of variable,parameter or return value should have
// they have: variable type annotation, function parameter annotation, return type annotation,array type and object type annotations

// example for variable type annotation .. (:string, :number, :boolean are type annotators)
let college:string ="Shri vishnu engineering college for women";
let year: number=2001;
let isRunning: boolean=true;

// example for function parameter annotation
function faculty(name: string, experience: number){
    console.log(name);
    console.log(experience);
}
faculty("abc",9);
// example for return type annotation 
function multiply(a: number, b: number):number{
    return a*b;
}
let ans=multiply(5,10);
console.log(ans);
//Array annotations
let numbers: number[] = [10, 20, 30];

let names: string[] = ["India","Israel","Russia","Japan"];
console.log(names);