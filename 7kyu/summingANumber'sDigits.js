//INSTRUCTION:
// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// EXAMPLE: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

//SOLUTION:

function sumDigits(number) {
  const split = Math.abs(number).toString().split("");

  let result = 0;
  for (let index = 0; index < split.length; index++) {
    result += Number(split[index]);
  }
  return result;
}

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5
