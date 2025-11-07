//DESCRIPTION:

// You are given two arrays a1 and a2 of strings.
// Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
//
// Find max(abs(length(x) − length(y)))
//
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

//EXAMPLE:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

//SOLUTION:

function mxdiflg(a1, a2) {
    // your code
    if (!a1.length || !a2.length) return -1

    const a1Lengths = a1.map(s => s.length);
    const a2Lengths = a2.map(s => s.length);

    // console.log(a1Lengths)
    // console.log(a2Lengths)

    const max1 = Math.max(...a1Lengths); // 11
    const min1 = Math.min(...a1Lengths); // 3
    const max2 = Math.max(...a2Lengths); // 16
    const min2 = Math.min(...a2Lengths); //10

    console.log(max1) // 11
    console.log(min1) // 3
    console.log(max2) // 16
    console.log(min2) // 10
 // 11 - 10 16 - 3
    return Math.max(Math.abs(max1 - min2), Math.abs(max2 - min1));

}

const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
console.log(mxdiflg(s1, s2)) // 13
console.log(mxdiflg([], [])) // -1
