//INSTRUCTIONS:

// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep
// present in the array (true means present).
//
// However, just as she finished rating all exhibits,
// she's off to an important fair, so she asks you to write a program
// that tells her the ratings of the exhibits after removing the lowest one.
// Fair enough.

//EXAMPLE:
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// HINT:
// Don't forget to check for bad values like null/undefined


// SOLUTION:

//first

function countSheeps(sheep) {
    let result = 0
    sheep.filter(s => s ? result += 1 : 0)
    return result
}

console.log(countSheeps([])) // 0
console.log(countSheeps([undefined])) // 0
console.log(countSheeps([null])) // 0
console.log(countSheeps([false])) // 0
console.log(countSheeps([true])) // 1
console.log(countSheeps([undefined, null, false, true])) // 1
console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true])) // 17
