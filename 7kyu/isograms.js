//DESCRIPTION:

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

//EXAMPLES:

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//SOLUTION:

function isIsogram(str){
    return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram("Dermatoglyphics")) // true
console.log(isIsogram("aba")) // false
console.log(isIsogram("moOse")) // false
console.log(isIsogram("")) // true


function unique(str) {
    const seen = {};
    for (const char of str.toLowerCase()) {
        if (seen[char]) return false;
        seen[char] = true;
    }
    return true;
}

console.log(unique("Dermatoglyphics")) // true
console.log(unique("aba")) // false
console.log(unique("moOse")) // false
console.log(unique("")) // true