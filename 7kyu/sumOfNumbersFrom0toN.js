// INSTRUCTIONS:

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// EXAMPLE:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

//SOLUTION:

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    // for
    //while
    if (count < 0) return `${count} < 0`;
    if (count === 0) return `${count} = 0`;

    const nums = [];
    let result = 0;
    for (let index = 0; index <= count; index++) {
      nums.push(index);
    }
    for (let index = 0; index < nums.length; index++) {
      result += nums[index];
    }
    return `${nums.join("+")} = ${result}`;
  };

  return SequenceSum;
})();

console.log(SequenceSum.showSequence(6)); // 21
