//INSTRUCTIONS:

// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.

//EXAMPLE:

//Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
//
// Input: []
// Output: 0
//
// Input: [-2.398]
// Output: -2.398

//SOLUTIONS:

//first

function sum (numbers) {
    let result = 0

    for (let i = 0; i < numbers.length ; i++) {
        result += numbers[i]
    }
    return result
}

console.log(sum([1, 5.2, 4, 0, -1])) // 9.2
console.log(sum([])) // 0
console.log(sum([1, 1, 2, 2, 3, 100])) // 109

//second
function withReduce(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(withReduce([1, 1, 2]))
