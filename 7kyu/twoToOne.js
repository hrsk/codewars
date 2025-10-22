// DESCRIPTION:

// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string (alphabetical ascending),
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// EXAMPLES:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// SOLUTION:
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
    // const result = s1.split("").concat(s2.split(""))
    //
    // for (let i = 0; i < result.length; i++) {
    //     if (result[i] === result[i + 1]) {
    //         delete result[i + 1]
    //     }
    // }
    // return result
    // return result.filter(obj => Object.keys(obj !== 0))
}

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // "abcdefghilnoprstu"
console.log(longest("aretheyhere", "yestheyarehere")) // "aehrsty"