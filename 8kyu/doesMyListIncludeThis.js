//DESCRIPTION:
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//SOLUTION:
function include(arr, item) {
    for (let arrKey in arr) {
        if (arr[arrKey] === item) return true
    }
    return false
}

console.log(include([1, 2, 4, 5], 3)) // false
console.log(include([1, 2, 3, 4], 3)) // true
console.log(include([], 3)) // false