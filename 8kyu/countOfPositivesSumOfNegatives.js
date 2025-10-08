// DESCRIPTION:
// Given an array of integers.
//
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//
// If the input is an empty array or is null, return an empty array.


//EXAMPLE:
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// SOLUTION:

function countPositivesSumNegatives(input) {
    if (!Array.isArray(input)) {
        return [];
    }
    if (input.length === 0) return  []

    const negativeNumbers = []
    const positiveNumbers = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            negativeNumbers.push(input[i])
        }
        if (input[i] > 0) {
            positiveNumbers.push(input[i])
        }
    }
    console.log(positiveNumbers)
    let sumNegativeNumbers = 0;
    for (let i = 0; i < negativeNumbers.length; i++) {
        sumNegativeNumbers += negativeNumbers[i]
    }
    return [positiveNumbers.length, sumNegativeNumbers]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) // [8, -50]
console.log(countPositivesSumNegatives(null)) // []
console.log(countPositivesSumNegatives([])) // []
