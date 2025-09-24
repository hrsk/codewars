// INSTRUCTION:
// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.

//EXAMPLE:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] ==> ["Keep", "Keep", "Keep", ...]

// NOTE:
// None of the arrays will be empty, so you don't have to worry about that!

// SOLUTION:

function removeEveryOther(arr) {
    const newArray = [];

    for (let i = 0; i < arr.length; i += 2) {
        newArray.push(arr[i])
    }

    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 === 0) {
    //         newArray.push(arr[i])
    //     }
    // }
    return newArray
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); // ['Hello', 'Hello Again']

function filterRemoveEveryOther(arr) {
    return arr.filter((_, index) => index % 2 === 0)
}

console.log(filterRemoveEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
