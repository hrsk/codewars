//INSTRUCTION:

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

//SOLUTION:

function findDifference(a, b) {
  let resultA = a[0];
  let resultB = b[0];
  for (let index = 1; index < a.length; index++) {
    resultA *= a[index];
  }
  for (let index = 1; index < b.length; index++) {
    resultB *= b[index];
  }
  return Math.max(resultA, resultB) - Math.min(resultA, resultB);
}

console.log(findDifference([3, 2, 5], [1, 4, 4])); // 14
console.log(findDifference([15, 20, 25], [10, 30, 25])); // 0
