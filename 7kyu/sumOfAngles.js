//DESCRIPTION:

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

//SOLUTION:

function angle(n) {
    //code here
    if (n <= 2) {
        throw new Error("n must be greater than 2");
    }
    return (n - 2) * 180;
}

console.log(angle(3))
console.log(angle(4))
console.log(angle(5))
console.log(angle(1))
