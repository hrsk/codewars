//DESCRIPTION:
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language;
// see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.


// EXAMPLES:
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

// SOLUTION:
String.prototype.toAlternatingCase = function () {
    // Define your method here :)

    const symbols = this.split('')
    for (let i = 0; i < symbols.length; i++) {
        if (typeof symbols[i] !== 'number' && symbols[i] === symbols[i].toLowerCase()) {
            symbols[i] = symbols[i].toUpperCase()
        } else symbols[i] = symbols[i].toLowerCase()
    }
    return symbols.join('')
}


console.log("hello world".toAlternatingCase()) // "HELLO WORLD"
console.log("HELLO WORLD".toAlternatingCase()) // "hello world"
console.log("1a2b3c4d5e".toAlternatingCase()) // "1A2B3C4D5E"