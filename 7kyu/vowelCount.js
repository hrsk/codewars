//DESCRIPTION:
//Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

//SOLUTION:
function getCount(str) {
    const regex = /^[aeiouAEIOU]$/;
    const REG_EXP = /[aeiou]/gi;


    const result = str.match(REG_EXP)
    if (result) {
        return result.length
    } else return 0
}

console.log(getCount('abracadabra')); // 5
console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13
console.log(getCount('my pyx')); // 13