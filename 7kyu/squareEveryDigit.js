//DESCRIPTION:

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//
//EXAMPLES:
// if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
//
// NOTE: The function accepts an integer and returns an integer.

//SOLUTION:

function squareDigits(num) {
    const str = num.toString().split('');

    const nums = []
    for (let i = 0; i < str.length; i++) {
        nums.push(str[i] * str[i])
    }

    return Number(nums.join(''))
}

console.log(squareDigits(3212)) // 9414
console.log(squareDigits(2112)) // 4114
console.log(squareDigits(0)) // 0