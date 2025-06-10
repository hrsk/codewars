// INSTRUCTIONS:

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string.

// EXAMPLE:
// The test input may be "1 year old" or "5 years old".
// The first character in the string is always a number.

//SOLUTIONS:

function getAge(inputString) {
// return the girl's correct age as an integer. Happy coding :)
// TODO: Если индекс начала не указан или определяется как start <= -array.length,
//  то началом диапазона копирования будет 0-й элемент
    return +inputString.slice(-inputString.length, 1)
}

console.log(typeof (getAge('9 years old')))
console.log(getAge('9 years old'))
console.log(getAge('4 years old'))