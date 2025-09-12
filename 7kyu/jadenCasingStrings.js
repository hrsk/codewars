// INSTRUCTIONS:

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
// Jaden is also known for some of his philosophy that he delivers via Twitter.
// When writing on Twitter, he is known for almost always capitalizing every word.
// For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
//
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// EXAMPLE:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


// SOLUTIONS:

function toJadenString(str) {
    const words = str.split(" ")

    const transformWords = []
    for (let i = 0; i < words.length; i++) {
        transformWords.push(words[i].replace(words[i][0], words[i][0].toUpperCase()))
    }
    return transformWords.join(' ')

}

function secondToJadenString(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


console.log(toJadenString("most trees are blue")) // "Most Trees Are Blue"
console.log(toJadenString("How can mirrors be real if our eyes aren't real")) // "How Can Mirrors Be Real If Our Eyes Aren't Real"
console.log(secondToJadenString("most trees are blue")) // "Most Trees Are Blue"
console.log(secondToJadenString("How can mirrors be real if our eyes aren't real")) // "How Can Mirrors Be Real If Our Eyes Aren't Real"