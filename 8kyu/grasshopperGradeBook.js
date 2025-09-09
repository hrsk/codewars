//INSTRUCTIONS:

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {

    const averageOfTheScores = Math.round((s1 + s2 + s3) / 3)

    if (averageOfTheScores >= 90 && averageOfTheScores <= 100) {
        return 'A';
    } else if (averageOfTheScores >= 80) {
        return 'B';
    } else if (averageOfTheScores >= 70) {
        return 'C';
    } else if (averageOfTheScores >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(getGrade(95, 90, 93)) // A
console.log(getGrade(100, 85, 96)) // A
console.log(getGrade(92, 93, 94)) // A

console.log(getGrade(70, 70, 70)) // C
console.log(getGrade(75, 70, 79)) // C
console.log(getGrade(60, 82, 76)) // C

console.log(getGrade(58, 59, 60)) // F
console.log(getGrade(48, 55, 52)) // F
console.log(getGrade(44, 55, 52)) // F