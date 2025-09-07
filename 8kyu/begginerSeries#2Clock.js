// INSTRUCTIONS:


// Clock shows h hours, m minutes and s seconds after midnight.
//
// Your task is to write a function which returns the time since midnight in milliseconds.

// EXAMPLES:

// h = 0
// m = 1
// s = 1
//
// result = 61000

// Input constraints:
//
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
    // 60 minutes = 60 * 60000 = 3600000 milliseconds

    // 1 minutes = 60 seconds * 1000 milliseconds = 60 000 milliseconds
    // 1 minutes = 60 seconds
    // 1 seconds = 1000 milliseconds

    return h * 3600000 + m * 60000 + s * 1000

}

console.log(past(1, 1, 1)) // 3661000
console.log(past(1, 0, 1)) // 3601000
console.log(past(1, 0, 0)) // 3600000

//second

function secondPast(h, m, s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}

console.log(secondPast(1, 1, 1)) // 3661000
console.log(secondPast(1, 0, 1)) // 3601000
console.log(secondPast(1, 0, 0)) // 3600000
