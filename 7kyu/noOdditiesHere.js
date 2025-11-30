//DESCRIPTION:
// Write a small function that returns the values of an array that are not odd.
//
// All values in the array will be integers. Return the good values in the order they are given.

//SOLUTION:
function noOdds(values) {
    const result = []

    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
            result.push(values[i])
        }
    }
    return result
    // Return all non-odd values
}

console.log(noOdds([0, 1])) // [0]
console.log(noOdds([0, 1, 2, 3])) // [0, 2]