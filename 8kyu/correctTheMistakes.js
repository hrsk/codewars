//INSTRUCTIONS:

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
//
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
//
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

// The test cases contain numbers only by mistake.

// SOLUTION:

function correct(string) {
    return string.split('').map(symbol => {
        switch (symbol) {
            case '0':
                return symbol.replace(symbol, 'O')
            case '1':
                return symbol.replace(symbol, 'I')
            case '5':
                return symbol.replace(symbol, 'S')
            default:
                return symbol
        }
    }).join('')
    // your code here
}

console.log(correct("L0ND0N")) // LONDON
console.log(correct("51NGAP0RE")) // SINGAPORE
console.log(correct("BUDAPE5T")) // BUDAPEST
console.log(correct("PAR15")) // PARIS