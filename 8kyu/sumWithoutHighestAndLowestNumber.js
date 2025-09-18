// INSTRUCTIONS

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
// Mind the input validation.

// EXAMPLE
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

//VALIDATION
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

//SOLUTION

//first

function sumArray(array) {
    let result = 0;

    if (array === null || array === undefined || array.length === 1) {
        return 0
    } else {
        const sliceArr = array.sort((a, b) => a - b ).slice(1, array.length -1);
        // const sliceArr = array.toSorted((a, b) => a - b).slice(1, array.length - 1)

        for (let i = 0; i < sliceArr.length; i++) {
            result += sliceArr[i]
        }
    }

    return result
}

console.log(sumArray([6, 2, 1, 8, 10])) // 16
console.log(sumArray([0, 1, 6, 10, 10])) // 17
console.log(sumArray([ -6, -20, -1, -10, -12 ])) // -28
console.log(sumArray([  ])) // 0
console.log(sumArray([ null ])) // 0
console.log(sumArray([ -6 ])) // 0

// second

reduceSumArray = (arr) => arr ? arr.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr, 0) : 0

console.log(reduceSumArray([6, 2, 1, 8, 10])) // 16
console.log(reduceSumArray([0, 1, 6, 10, 10])) // 17
console.log(reduceSumArray([ -6, -20, -1, -10, -12 ])) // -28
console.log(reduceSumArray([  ])) // 0
console.log(reduceSumArray([ null ])) // 0
console.log(reduceSumArray([ -6 ])) // 0