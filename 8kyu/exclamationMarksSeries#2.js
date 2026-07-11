// DESCRIPTION:

// Remove all exclamation marks from the end of sentence.

// EXAMPLES:

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

//SOLUTION:

function remove(string) {
  const index = string.split("").findLastIndex((el) => el !== "!");
  return string
    .split("")
    .splice(0, index + 1)
    .join("");
}

console.log(remove("Hi!!!")); // "Hi"
console.log(remove("Hi! Hi!")); // "Hi! Hi"
