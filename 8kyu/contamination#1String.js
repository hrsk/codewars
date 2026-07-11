// INSTRUCTION:
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// EXAMPLE

// text before = "abc"
// character   = "z"
// text after  = "zzz"

// SOLUTION:

function contamination(text, char) {
  const newText = [];
  let element;

  for (const key in text) {
    if (text[key]) {
      element = char;
    }

    newText.push(element);
  }
  return newText.join("");
}

console.log(contamination("_3ebzgh4", "&")); // "&&&&&&&&"
