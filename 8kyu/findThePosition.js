//DESCRIPTION:
// When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Output :: "Position of alphabet: 1"
//
// NOTE: Only lowercased English letters are tested

//SOLUTION:
function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`
}

console.log(position('a')) // 1
console.log(position('b')) // 1