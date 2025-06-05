//INSTRUCTIONS:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
// The function takes a name as its only argument, and returns one of the following strings:

// Names given are always valid strings.

// EXAMPLE:

// name + " plays banjo"
// name + " does not play banjo"

//SOLUTION:

//first

function areYouPlayingBanjo(name) {
    // Implement me
    return name[0] === 'R' || name[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;

}
console.log(areYouPlayingBanjo("rolf"))
console.log(areYouPlayingBanjo("Adam"))
console.log(areYouPlayingBanjo("Robert"))
console.log(areYouPlayingBanjo("Ringo"))

//second

function secondAreYouPlayingBanjo(name) {
    // Implement me
    return name.toLowerCase()[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;

}
console.log(secondAreYouPlayingBanjo("rolf"))
console.log(secondAreYouPlayingBanjo("Adam"))
console.log(secondAreYouPlayingBanjo("Robert"))
console.log(secondAreYouPlayingBanjo("Ringo"))

