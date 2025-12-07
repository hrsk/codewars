// DESCRIPTION:
//
// Complete the method which accepts an array of integers, and returns one of the following:
//
//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise
//
// The order does not have to be strict: a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.
//
// It is guaranteed that there will always be a unique valid answer. More precisely:
//
//     there will be no arrays with less than 2 elements
//     there will be no arrays where all elements are equal

//SOLUTION:
function isSortedAndHow(array) {
    const sortedAsc = [...array].sort((a, b) => a - b)
    const sortedDesc = [...array].sort((a, b) => b - a)

    let ascending = true;
    let descending = true;

    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] !== sortedAsc[i]) {
    //         ascending = false
    //     } else if (array[i] !== sortedDesc[i]) {
    //         descending = false
    //     }
    // }
    //
    // if (ascending) return "yes, ascending"
    // if (descending) return "yes, descending"
    // else return "no"

    // 2

    if (array.every((v, i) => v === sortedAsc[i])) {
        return "yes, ascending";
    }

    if (array.every((v, i) => v === sortedDesc[i])) {
        return "yes, descending";
    }
    else return "no"
}

console.log(isSortedAndHow([8497,7758,5574,4217,3144,2359,-1296,-1657,-2237,-2236,-5331,-5709,-6774])) // no
console.log(isSortedAndHow([1, 3, 9, 4])) // no
console.log(isSortedAndHow([4, 3, 1, 9])) // no
console.log(isSortedAndHow([1, 2])) // yes, ascending
console.log(isSortedAndHow([2, 1])) // yes, descending
