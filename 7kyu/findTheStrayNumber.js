//DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

//EXAMPLES:
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//SOLUTION:
function stray(numbers) {
    return numbers.filter(el =>
        numbers.indexOf(el) === numbers.lastIndexOf(el)
    )[0]
}

console.log(stray([1, 1, 2])) // 2
console.log(stray([1, 2, 1])) // 2
console.log(stray([2, 1, 1])) // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])) // 3
console.log(stray([17, 17, 17, 3, 17, 17, 17])) // 3
console.log(stray([3, 17, 17, 17, 17, 17, 17])) // 3

