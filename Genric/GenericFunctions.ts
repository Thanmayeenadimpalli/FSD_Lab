function Example<T>(value: T): T {
    return value;
}

let num = Example<number>(80);
let text = Example<string>("Hello Thanmayeee");

console.log(num);  
console.log(text); 