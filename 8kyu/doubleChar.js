//INSTRUCTIONS:

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//EXAMPLE:

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

//SOLUTIONS:

function doubleChar(str) {
    // Code here
    return str.split('').map(char => char + char).join('')
}


console.log(doubleCar('String'))
console.log(doubleCar('Hello World'))
console.log(doubleCar("1234!_ "))
