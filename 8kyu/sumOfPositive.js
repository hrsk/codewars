// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

//EXAMPLES:
// [1, -4, 7, 12] ==> 1 + 7 + 12 = 20

//NOTE:
// If there is nothing to sum, the sum is default to 0.


//SOLUTIONS:

function positiveSum(arr) {
    const positiveNumbers = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumbers.push(arr[i])
        }
    }
    console.log(positiveNumbers)

    let sumPositive = 0
    for (let i = 0; i < positiveNumbers.length; i++) {
        sumPositive += positiveNumbers[i]
    }
    return sumPositive
}

console.log(positiveSum([1, -4, 7, 12])) // 1 + 7 + 12 = 20
