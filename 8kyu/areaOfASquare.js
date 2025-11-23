//DESCRIPTION:

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
//
//
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

//SOLUTION:

function squareArea(A){

    const result = (A / 1.570796)**2

    return Math.round(result * 100) / 100
}

console.log(squareArea(2))
console.log(squareArea(0))
console.log(squareArea(14.05))