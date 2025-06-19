//INSTRUCTIONS:

// Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition.
//
// The binary number returned should be a string.

//EXAMPLE:
// (Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// SOLUTION:

function addBinary(a, b) {
    let decimal = a + b;           // исходное число
    let binary = "";            // строка для результата
    while (decimal > 0) {
        let remainder = decimal % 2;         // остаток от деления на 2
        binary = remainder + binary;         // добавляем остаток в начало строки
        decimal = Math.floor(decimal / 2);   // целочисленное деление
    }
    return binary
}

console.log(addBinary(1, 1)) // "10"
console.log(addBinary(5, 9)) // "1110"

function addBinaryUseFor(a, b) {

    let decimal = a + b;
    let binary = "";
// инициализация (;) опущена — мы уже задали decimal до цикла,
// условие: decimal > 0,
// шаг: decimal = Math.floor(decimal / 2).
    if (decimal) {
        for (; decimal > 0; decimal = Math.floor(decimal / 2)) {
            let remainder = decimal % 2;
            binary = remainder + binary;
        }
        return binary
    } else return "0"
}

console.log(addBinaryUseFor(1, 1)) // "10"
console.log(addBinaryUseFor(5, 9)) // "1110"
console.log(addBinaryUseFor()) // "0"

function addBinaryStr(a, b) {
    const decimal = a + b
    if (decimal) {
        return (decimal).toString(2)
    } else return '0'
}

console.log(addBinaryStr(1, 1)) // "10"
console.log(addBinaryStr(5, 9)) // "1110"
console.log(addBinaryStr()) // "0"