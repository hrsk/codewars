//INSTRUCTION:
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

// SOLUTION:
function calculateTip(amount, rating) {
  const ratings = {
    excellent: "excellent",
    great: "great",
    good: "good",
    poor: "poor",
    terrible: "terrible",
  };

  const ratingLowerCase = rating.toLowerCase();

  if (Object.keys(ratings).includes(ratingLowerCase)) {
    switch (ratingLowerCase) {
      case ratings.excellent:
        return Math.ceil(amount * 0.2);
      case ratings.great:
        return Math.ceil(amount * 0.15);
      case ratings.good:
        return Math.ceil(amount * 0.1);
      case ratings.poor:
        return Math.ceil(amount * 0.05);
      default:
        return amount;
    }
  }
  return "Rating not recognised";
}

console.log(calculateTip(20, "Excellent")); // 4
console.log(calculateTip(26.95, "good")); // 3
console.log(calculateTip(684.996, "poor")); // 35

function calculateTip2(amount, rating) {
  const tips = {
    excellent: 0.2,
    great: 0.15,
    good: 0.1,
    poor: 0.05,
    terrible: 0,
  };

  const ratingLowerCase = rating.toLowerCase();

  return ratingLowerCase in tips
    ? Math.ceil(amount * tips[ratingLowerCase])
    : "Rating not recognised";
}

console.log(calculateTip2(20, "Excellent")); // 4
console.log(calculateTip2(26.95, "good")); // 3
console.log(calculateTip2(684.996, "poor")); // 195
