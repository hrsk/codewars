// DESCRIPTION:

// Numbers ending with zeros are boring.
//
// They might be fun in your world, but not here.
//
// Get rid of them. Only the ending ones.

//EXAMPLES:
// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0


//SOLUTION:
function noBoringZeros(n) {
    if (n === 0) return n
    //
    // return Number(n.toString().replace(/0+$/, ''))

    n = String(n).split('');

    for (let i = n.length - 1; i > 0; i--) {
        if (n[i] === '0') {
            n.pop();
            console.log(n)
        } else {
            return +n.join('');
        }
    }
}

console.log(noBoringZeros(1450)) // 145
console.log(noBoringZeros(0)) // 0
console.log(noBoringZeros(960000)) // 96
console.log(noBoringZeros(-1050)) // -105
console.log(noBoringZeros(1050)) // 105