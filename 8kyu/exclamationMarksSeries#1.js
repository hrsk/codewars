//DESCRIPTION:
// Remove an exclamation mark from the end of a string.
// For a beginner kata, you can assume that the input data is always a string, no need to verify it.

//EXAMPLES:

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

//SOLUTION:

function remove(string) {

    const splitStr = string.split("")

    const index = splitStr.findLastIndex((value, index) => {
        return (
            value === "!" && index === splitStr.length - 1
        )
    })
    if (index === 0) {
        return string
    } else if (index === -1) {
        return string
    } else {
        splitStr.splice(index, 1)
    }

    return splitStr.join("")

}
// solution 2:
// return s.endsWith('!') ? s.slice(0, -1) : s;


console.log(remove("Hi! Hi!")) // "Hi! Hi"
console.log(remove("Hi! Hi")) // "Hi Hi"
console.log(remove("Hi!!!")) // "Hi! Hi"
console.log(remove("!Hi!")) // "!Hi"
console.log(remove("!Hi")) // "!Hi"
console.log(remove("Hi")) // "!Hi"
console.log(remove("mqite! xyvcmtc")) // "!Hi"