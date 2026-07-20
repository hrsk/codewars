//INSTRUCTIONS:

//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// NOTE: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// EXAMPLES
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

//SOLUTION:

// write the function isAnagram
var isAnagram = function (test, original) {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
};

console.log(isAnagram("Buckethead", "DeathCubeK")); // true
console.log(isAnagram("foefet", "toffee")); // true
console.log(isAnagram("apple", "pale")); // false
