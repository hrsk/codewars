// INSTRUCTION:

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

// SOLUTION:

function twoSort(s) {

    const arr = s.sort()[0].split('')

    const resultArr = []
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(arr[i], "***")
    }
    return resultArr.slice(0, -1).join('')

    // return s.sort()[0].split('').join('***');
}

console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])); // 'a***r***e'
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])); // 'b***i***t***c***o***i***n'
