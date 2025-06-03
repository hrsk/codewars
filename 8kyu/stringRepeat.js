//INSTRUCTIONS:
// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// EXAMPLE:

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//SOLUTION:
function repeatStr(n, s) {
    let result = ''

    for (let i = 0; i < n; i++) {
        result += s
    }

    return result
}

console.log(repeatStr(5, "Hello"))
console.log(repeatStr(3, "*"))
