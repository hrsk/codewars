//DESCRIPTION:

//  Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

//EXAMPLES:

// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"

function replace(s) {
    //coding and coding....
    return s.replace(/[aeiou]/gi, "!");
}

console.log(replace('aeiou')) // "!!!!!"
console.log(replace('ABCDE')) // "!BCD!"
console.log(replace('!Hi! Hi!')) // "!H!! H!!"

