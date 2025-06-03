//INSTRUCTIONS:

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

//EXAMPLE:

// 1.08 --> 30

// NOTES:

// The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

//SOLUTIONS:

function cockroachSpeed(s) {
    //Good Luck!
    return Math.floor(s * 100000 / 3600)
}

console.log(cockroachSpeed(1.08))
