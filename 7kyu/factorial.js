//DESCRIPTION:
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
//
// EXAMPLE:
// 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

//SOLUTION:

function factorial(n) {
    let temp = 1
    if (n === 0) {
        return 1
    } else if (n === 1) {
        return 1
    } else if (n < 0 || n > 12 ) {
        throw new RangeError()
    } else {
        for (let i = 1; i <= n; i++) {
            temp *= i
        }
    }
    return temp
}

console.log(factorial(5))
console.log(factorial(1))
console.log(factorial(0))
console.log(factorial(13))
console.log(factorial(-1))
