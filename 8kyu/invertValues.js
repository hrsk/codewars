// DESCRIPTION:

// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.

// EXAMPLES:
// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// SOLUTION:
function invert(array) {

    // return array.map( x => x === 0 ? x : -x);

    const invertValues = []
    if (!array.length) return []


    if (array.length === 1 && array.includes(0)) return [0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 || array[i] < 0) {
            invertValues.push(array[i] * -1)
        } else invertValues.push(array[i])
    }
    return invertValues
}

console.log(invert([1, 2, 3, 4, 5, 0])) // [-1, -2, -3, -4, -5]
console.log(invert([1, -2, 3, -4, 5])) // [-1, 2, -3, 4, -5]
console.log(invert([])) // []
console.log(invert([0])) // [0]