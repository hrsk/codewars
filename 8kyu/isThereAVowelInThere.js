// INSTRUCTION:

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100, 100, 116, 105, 117, 121] => [100, 100, 116, "i", "u", 121] output Return the resulting array.

// SOLUTION:

function isVow(arr) {
  const vowelsCodes = [97, 101, 105, 111, 117];
  const vowels = ["a", "e", "i", "o", "u"];

  const res = [];

  arr.forEach((element, index) => {
    res[index] = element;
    for (const key in vowelsCodes) {
      if (element === vowelsCodes[key]) {
        res[index] = vowels[key];
      }
    }
  });

  return res;
}

console.log(isVow([100, 100, 116, 105, 117, 121])); // [100, 100, 116, "i", "u", 121]
console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ]),
); //  [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
