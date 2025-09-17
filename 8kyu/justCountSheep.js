// DESCRIPTION:

// If you can't sleep, just count sheeps!!

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
    const result = []
    for (let i = 1; i <= num ; i++) {
        result.push(`${i} sheep...`)
    }
    return result.join('')
}

console.log(countSheep(0)) // ""
console.log(countSheep(1)) // "1 sheep..."
console.log(countSheep(2)) // "1 sheep...2 sheep..."
console.log(countSheep(3)) // "1 sheep...2 sheep...3 sheep..."


function secondCountSheep(num){
    let resultString = ""
    for (let i = 1; i <= num ; i++) {
        resultString += `${i} sheep...`
    }
    return resultString
}

console.log(secondCountSheep(0)) // ""
console.log(secondCountSheep(1)) // "1 sheep..."
console.log(secondCountSheep(2)) // "1 sheep...2 sheep..."
console.log(secondCountSheep(3)) // "1 sheep...2 sheep...3 sheep..."