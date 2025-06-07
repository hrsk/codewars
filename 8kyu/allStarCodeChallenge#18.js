//INSTRUCTIONS:

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//
// If no occurrences can be found, a count of 0 should be returned.

//EXAMPLE:
// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0

//NOTES:

// The first argument can be an empty string
// In languages with no distinct character data type,
// the second argument will be a string of length 1

// SOLUTION:

//first
function strCount(str, letter){
    return str.length > 0 ? str.split('').filter(symbol => symbol === letter).length : 0
}

console.log(strCount("green", 'e')) // 2
console.log(strCount("yellow", 'l')) // 2
console.log(strCount("red", 'e')) // 1
console.log(strCount("", 'e')) // 1

//second
function secondStrCount(str, letter){
    return str.split(letter).length - 1
}

console.log(secondStrCount("green", 'e')) // 2
console.log(secondStrCount("yellow", 'l')) // 2
console.log(secondStrCount("red", 'e')) // 1
console.log(secondStrCount("", 'e')) // 1
