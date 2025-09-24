// DESCRIPTION:
// Complete the function that accepts a string parameter,
// and reverses each word in the string.
// All spaces in the string should be retained.

//SOLUTION:

function reverseWords(str) {
    return str.split(' ').map(word => word.length ? word.split('').reverse().join('') : '').join(' ')
    // return str.split('').reverse().join('').split(' ').reverse().join(' ')

}

console.log(reverseWords('double  spaced  words')) // 'elbuod  decaps  sdrow'

