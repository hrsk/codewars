// INSTRUCTION:

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// SOLUTION:

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}


console.log(simpleMultiplication(8)) // 64
console.log(simpleMultiplication(5)) // 45
