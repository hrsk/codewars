//DESCRIPTION:

// Mr. Scrooge has a sum of money 'P' that he wants to invest.
// Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank
// in order for it to amount to a desired sum of money 'D'.
//
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly.
// After paying taxes 'T' for the year the new sum is re-invested.
//
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest.

// EXAMPLE:
//   Let P be the Principal = 1000.00
//   Let I be the Interest Rate = 0.05
//   Let T be the Tax Rate = 0.18
//   Let D be the Desired Sum = 1100.00
//
//
// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30

// SOLUTION:
function calculateYearsWithWhile(principal, interest, tax, desired) {
    let result = principal;
    let years = 0;
    if (principal === desired) return 0

    while (result < desired) {
        let profit = result * interest;
        let taxed = profit - profit * tax;
        result += taxed;
        years++;
    }

    return years;
}

console.log(calculateYearsWithWhile(1000, 0.01625, 0.18, 1200)) // 14
console.log(calculateYearsWithWhile(1000, 0.05, 0.18, 1100)) // 3
console.log(calculateYearsWithWhile(1000, 0.05, 0.18, 1000)) // 0

function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    if (principal === desired) return 0
    for (let result = principal; result < desired; years++) {
        result += (result * interest) - (result * interest * tax)
    }

    return years
}

console.log(calculateYears(1000, 0.01625, 0.18, 1200)) // 14
console.log(calculateYears(1000, 0.05, 0.18, 1100)) // 3
console.log(calculateYears(1000, 0.05, 0.18, 1000)) // 0