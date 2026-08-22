//Understanding the datatypes 
//  there are 3 datatypes: string,number, boolean
let username: string="Thanmayee";
let userAge: number=25;
let isIndian: boolean=true;
console.log("username datatype is: "+typeof username);
console.log("userAge datatype is: "+typeof userAge);
console.log("isIndian datatype is: "+typeof isIndian);

//writing a simple function to demonstrate these datatypes
function display(name: string, age: number, isIndian: boolean){
    console.log(`Name: ${name}`);
    console.log(`age: ${age}`);
    console.log(`isIndian: ${isIndian ?"Yes": "No"}`);
}
// calling a function
display(username,userAge,isIndian);