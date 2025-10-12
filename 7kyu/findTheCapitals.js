//INSTRUCTION:
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument,
// and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

//EXAMPLE:
// "CodEWaRs" ==> [0,3,4,6]

//SOLUTION:

function capitals(word) {

    const letters = word.split('')
    const result = []

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === letters[i].toUpperCase()) {
            result.push(i)
        }
    }
    return result
}

console.log(capitals('CodEWaRs')) // [0, 3, 4, 6]

