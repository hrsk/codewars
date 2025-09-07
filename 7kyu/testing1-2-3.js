// INSTRUCTIONS:

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// EXAMPLES:

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

const number = function (array) {
    if (array.length) {
        return array.map((symbol, index) => `${index + 1}: ${symbol}` )
    }

    return []
    //your awesome code here
}

console.log(number(["a", "b", "c"])) // ["1: a", "2: b", "3: c"]
console.log(number([])) // []