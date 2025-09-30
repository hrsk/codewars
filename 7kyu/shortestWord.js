//DESCRIPTION:
//Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

//SOLUTION:
function findShort(s) {
    const sortedArray = s.split(" ").sort((a, b) => {
        return a.length - b.length
    })

    return sortedArray[0].length
}

console.log(findShort("turns out random test cases are easier than writing out basic ones")) // 3
console.log(findShort("Let's travel abroad shall we")) // 2