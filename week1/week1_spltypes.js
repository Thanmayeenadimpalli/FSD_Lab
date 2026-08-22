"use strict";
// in this exp we are going to demonstrate the usage of the special types: any,  unknown and the void
// in simle terms what s=does they do: 
// any: this wont check what value u assign it takes number,string anything (but unsafe)...
// unknown: this also same like the any type but only difference is it will check its type before using the value..(safer to use)
//void: we all know void means the function doesnot return anything..
let value = 20;
value = "thanmayee";
value = false;
// we can assign any datatype value it will not give error.
let abc = 20;
if (typeof abc === "string") {
    console.log("Iam type checking here and iam printing..");
}
function studentName(name) {
    console.log("Students name is " + name);
}
let fullname = "Thanmayee";
studentName(fullname);
