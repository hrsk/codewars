//DESCRIPTION:

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
//
//make as few changes as possible.
//if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
//
//EXAMPLE:
//
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.


//SOLUTION:

function solve(s){

    const lower = []
    const upper = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) {
            lower.push(s[i])
        } else upper.push(s[i])
    }

    return lower.length >= upper.length ? s.toLowerCase() : s.toUpperCase()
}

console.log(solve('code')) // 'code'
console.log(solve('CODe')) // 'CODE'
console.log(solve('COde')) // 'code'
console.log(solve('Code')) // 'code'
