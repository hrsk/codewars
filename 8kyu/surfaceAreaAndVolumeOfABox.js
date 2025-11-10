//DESCRIPTION:

// Write a function that returns the total surface area and volume of a box.
//
// The given input will be three positive non-zero integers: width, height, and depth.
//
// The output will be language dependant, so please check sample tests for the corresponding data type, (list, tuple, struct, query, etcetera).

//SOLUTION:

function getSize(width, height, depth) {
    const S = 2 * (width * height + width * depth + height * depth)
    const V = width * height * depth
    return [S, V]
}

console.log(getSize(4, 2, 6)) // [88, 48]
console.log(getSize(10, 10, 10)) // [600, 1000]