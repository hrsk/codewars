//DESCRIPTION:
// You might know some pretty large perfect squares. But what about the NEXT one?
//
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

//EXAMPLE:
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square


//SOLUTION:
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1) : -1
}

console.log(findNextSquare(121)) // 144
console.log(findNextSquare(625)) // 676
console.log(findNextSquare(155)) // -1
console.log(findNextSquare(342786627)) // -1


