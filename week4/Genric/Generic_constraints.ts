//actually genric variables means that variable can allow all types of data right? but if we want to restrict some types of data like we dont want to allow every type.
function getMaximum<T extends number | string>(a: T, b: T): T {
    return a > b ? a : b;
}

console.log(getMaximum(20, 22));       
console.log(getMaximum("Thanmayee", "Sangeetha"));     