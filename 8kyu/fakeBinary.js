// INSTRUCTIONS:

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.


// NOTE: input will never be an empty string


// SOLUTIONS:

function fakeBin(x) {
    const fakeBinArr = x.split('')

    const newArr = []
    for (let i = 0; i < fakeBinArr.length; i++) {
        if (fakeBinArr[i] < 5) {
            newArr.push(+0)
        } else newArr.push(1)
    }
    return newArr.join('')
}

console.log(fakeBin('45385593107843568')) // '01011110001100111'
console.log(fakeBin('366058562030849490134388085')) // '011011110000101010000011011'

function secondFakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
console.log(secondFakeBin('45385593107843568')) // '01011110001100111'
console.log(secondFakeBin('366058562030849490134388085')) // '011011110000101010000011011'