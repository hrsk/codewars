//You will be given an array a and a value x.
// All you need to do is check whether the provided array contains the value.
//
// a can contain numbers or strings. x can be either.
//
// Return true if the array contains the value, false if not.

// SOLUTION:

function check(a, x) {
    // return a.find((value) => value === x) !== undefined
    return a.includes(x);
}

console.log(check([66, 101], 66)) // true
console.log(check([101, 45, 75, 105, 99, 107], 107)) // true
console.log(check(['t', 'e', 's', 't'], 'e')) // true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')) // false
console.log(check([0], 0)) // true
console.log(check([], 1)) // false