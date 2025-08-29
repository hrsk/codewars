// DESCRIPTION:

// Your goal is to write a function that removes the first and last characters of
// a string. You're given one parameter, the original string.
//
// Important: Your function should handle strings of any length ≥ 2 characters.
// For strings with exactly 2 characters, return an empty string.

// EXAMPLE:

// 'eloquent' --> 'loquen'
// 'country'  --> 'ountr'
// 'person'   --> 'erso'
// 'ab'       --> '' (empty string)
// 'xyz'      --> 'y'

// Requirements:
// The input string will always have at least 2 characters
// For strings with exactly 2 characters, return an empty string
// For strings with 3 or more characters, remove the first and last character
// The function should handle strings containing letters, numbers, and special characters

// Test Cases:
// Your solution will be tested against:
//
// Basic functionality with common words
// Edge cases with 2-character and 3-character strings
// Strings containing numbers and special characters
// Random test cases of varying lengths


// SOLUTIONS:

function removeChar(str){
    //You got this!
    return str.split('').slice(1, str.length - 1 ).join('')

}

console.log(removeChar('eloquent')) // 'loquen'
console.log(removeChar('ab')) // ''
console.log(removeChar('xyz')) // 'y'

//second
function secondRemoveChar(str){
    //You got this!
    return str.slice(1, str.length - 1 )

}

console.log(secondRemoveChar('eloquent')) // 'loquen'
console.log(secondRemoveChar('ab')) // ''
console.log(secondRemoveChar('xyz')) // 'y'

// third

function thirdRemoveChar(str){
    //You got this!
    return str.substring(1, str.length - 1 )

}

console.log(thirdRemoveChar('eloquent')) // 'loquen'
console.log(thirdRemoveChar('ab')) // ''
console.log(thirdRemoveChar('xyz')) // 'y'