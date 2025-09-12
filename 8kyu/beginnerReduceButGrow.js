// INSTRUCTIONS:

// Given a non-empty array of integers, return the result of multiplying the values together in order.

// EXAMPLE:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// SOLUTIONS:

function grow(x) {
    let temp = 1
    for (let i = 0; i < x.length; i++) {
        temp = temp * x[i]
    }
    return temp
}

console.log(grow([2, 2, 2, 2, 2, 2])) // 64
console.log(grow([1, 2, 3, 4])) // 24
console.log(grow([4, 1, 1, 1, 4])) // 16