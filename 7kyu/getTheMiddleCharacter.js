// DESCRIPTION:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

//EXAMPLES:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

//SOLUTIONS:

function getMiddle(s) {
    const middle = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s.slice(middle - 1, middle + 1) : s[middle];
}

console.log(getMiddle('test')) // "es"
console.log(getMiddle('testing')) // "t"
console.log(getMiddle('middle')) // "dd"
console.log(getMiddle('A')) // "A"