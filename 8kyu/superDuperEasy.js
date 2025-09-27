//DESCRIPTION:
// Make a function that returns the value multiplied by 50 and increased by 6.
// If the value entered is a string it should return "Error".

function problem(x){
    // if (typeof x === "string") {
    if (x === String(x)) {
        return "Error"
    } else return x * 50 + 6
    //your code here
}

console.log(problem("hello")) // "Error"
console.log(problem(3)) // 156
console.log(problem(-3)) // -144