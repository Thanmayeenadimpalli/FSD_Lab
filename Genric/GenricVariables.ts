//genrics is like the reusable code that works with different types of code that will work with different types while maintaining type safety..
type Example<T> = {   // here we are creating a generic type: T is a generic type parameter it can be either number,string.. based on the input
    value: T;
};

let numberBox: Example<number> = {// here T becomes number
    value: 80
};

let stringBox: Example<string> = {//here T becomes string
    value: "Hello Thanmayee"
};
console.log(numberBox.value);
console.log(stringBox.value);