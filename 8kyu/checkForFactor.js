//DESCRIPTION:
// This function should test if the factor is a factor of base.
//
// Return true if it is a factor or false if it is not.

//SOLUTION:


function checkForFactor(base, factor) {
    if (base >= 0 && factor > 0) {
        return base % factor === 0
    }
}

console.log(checkForFactor(10, 2)) // true
console.log(checkForFactor(9, 2)) // false
console.log(checkForFactor(24617,3)) // false