// INSTRUCTIONS:

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// SOLUTION:

function removeExclamationMarks(s) {
    const splitArray = s.split('')

        const result = []
    for (let i = 0; i < splitArray.length; i++) {
        if (splitArray[i] === '!') {
            result.push(i)
        }
    }

    for (const resultElement of result) {
        delete splitArray[resultElement]
    }
        return splitArray.join('')
}

console.log(removeExclamationMarks("Hello World!!!!!!"))
console.log(removeExclamationMarks("voCgbOgGDv!PkMpyFOFKT PFecBELhyn!oMPGwiJgxc"))