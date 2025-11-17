//DESCRIPTION:
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
//
// Given a year, return the century it is in.
// EXAMPLES
//
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
//
// NOTE: this kata uses strict construction as shown in the description and the examples, you can read more about it here

//SOLUTION:

function century(year) {
    // if (year < 100) return 1
    // if (year <= 999) {
    //     return year / 100 === Number(year.toString().split('').splice(0,1).join('')) ? year / 100 : Math.floor(year / 100) + 1;
    // }
    // if (year > 999) {
    // return year / 100 === Number(year.toString().split('').splice(0,2).join('')) ? year / 100 : Math.floor(year / 100) + 1;
    // }

    return Math.ceil(year/100)
}

console.log(century(1705)) // 18
console.log(century(1900)) // 19
console.log(century(1601)) // 17
console.log(century(2000)) // 20
console.log(century(2742)) // 28
console.log(century(89)) // 1
console.log(century(101)) // 2
console.log(century(2163)) // 22
console.log(century(800)) // 8
console.log(century(3000)) // 30