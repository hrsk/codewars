//INSTRUCTIONS:

// Complete the function that takes two integers (a, b, where a < b)
// and return an array of all integers between the input parameters, including them.

//EXAMPLE:
// a = 1
// b = 4
// --> [1, 2, 3, 4]

// SOLUTION:

//first
function between(a, b) {
    let resultArray = []
    for (let i = a; i <= b; i++) {
        resultArray.push(i)
    }
    return resultArray
}

console.log(between(1, 4))
console.log(between(5, 40))


