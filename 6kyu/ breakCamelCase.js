// INSTRUCTIONS:

// Complete the solution so that the function will break up camel casing, using a space between words.


//EXAMPLE:
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {

    const letters = []
    for (let i = 0; i < string.split('').length; i++) {
        if (string.split('')[i] === string.split('')[i].toUpperCase()) {
            letters.push(string.split('')[i])
        }
    }

    if (!letters.length) return string

    let result = "";

    for (const char of string) {
        if (letters.includes(char)) {
            result += " " + char;
        } else {
            result += char;
        }
    }
    return result

    //second solution

    // return string
    //     .split("")
    //     .map(char => (letters.includes(char) ? " " + char : char))
    //     .join("");

}

console.log(solution('camelCasing')) // "camel Casing"
console.log(solution('camelCasingTest')) // "camel Casing Test"
console.log(solution('identifier')) // "identifier"
console.log(solution('')) // ""
