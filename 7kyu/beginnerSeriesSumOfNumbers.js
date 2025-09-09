// INSTRUCTIONS:
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.
//
// Note: a and b are not ordered!


// EXAMPLES:
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

//NOTES:
// Your function should only return a number, not the explanation about how you get that number.


function getSum(a, b) {
    const numbers = [];

    const start = Math.min(a, b);
    const end = Math.max(a, b);

    for (let i = start; i <= end; i++) {
        numbers.push(i)
    }

    let resultSum = 0

    for (let i = 0; i < numbers.length; i++) {
        resultSum += numbers[i]
    }

    return resultSum

}

console.log(getSum(1, 0)) // 1
console.log(getSum(-1, 2)) // 2
console.log(getSum(1, 1)) // 1