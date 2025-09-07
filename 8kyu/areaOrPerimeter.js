// INSTRUCTIONS:

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// EXAMPLES:

// 6, 10 --> 32
// 3, 3 --> 9

// NOTES:
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function (l, w) {

    switch (Boolean(true)) {
        case l === w:
            return l * w
        case l > w || l < w:
            return (l + w) * 2
    }
    // Return your answer
};


console.log(areaOrPerimeter(3, 3)) // 9
console.log(areaOrPerimeter(6, 10)) // 32