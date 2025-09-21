// INSTRUCTION:
// Write a function which calculates the average of the numbers in a given array.

// NOTE: Empty arrays should return 0.

// SOLUTION:

function findAverage(array) {
    let sum = 0;

    if (!array.length) {
        return 0
    }
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum / array.length

}


console.log(findAverage([1, 2, 3, 4])) // 2.5
console.log(findAverage([])) // 0


function reduceFindAverage(array) {
    return !array.length ? 0 : array.reduce((acc, prev) => {
        // console.log('acc:', acc);
        // console.log('prev:', prev);
        return acc + prev
    }, 0) / array.length

}


console.log(reduceFindAverage([1, 2, 3, 4])) // 2.5
console.log(reduceFindAverage([])) // 0
