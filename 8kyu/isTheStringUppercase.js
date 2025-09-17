// DESCRIPTION:
// Create a method to see whether the string is ALL CAPS.

//EXAMPLE:

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

//NOTE:

//In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function () {
    // return this.toUpperCase() === this.toString();

    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(this[i])
    }

    return result.every((symbol) => {
        if (symbol === symbol.toUpperCase()) {
            return true
        } else return false
    })
}

console.log("ACSKLDFJSgSKLDFJS K L DFJ".isUpperCase())