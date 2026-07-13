//INSTRUCTION:

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// EXAMPLES: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

//SOLUTION:

function sumCubes(n) {
  let result = 0;
  for (let index = 1; index <= n; index++) {
    result += Math.pow(index, 3);
  }
  return result;
}

console.log(sumCubes(2)); // 9
console.log(sumCubes(3)); // 36
