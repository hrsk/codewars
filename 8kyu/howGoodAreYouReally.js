//DESCRIPTION:
// There was a test in your class and you passed it. Congratulations!
//
// But you're an ambitious person.
// You want to know if you're better than the average student in your class.
//
// You receive an array with your peers' test scores.
// Now calculate the average and compare your score!
//
// Return true if you're better, else false!


//NOTES:
// Your points are not included in the array of your class's points.
// Do not forget them when calculating the average score!

//SOLUTION:

function betterThanAverage(classPoints, yourPoints) {

    let result = 0
    for (let i = 0; i < classPoints.length; i++) {
        result += classPoints[i]
    }
    return yourPoints > Math.round(result / classPoints.length)

}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) // true
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)) // false
console.log(betterThanAverage([50, 50, 50], 50)) // false

function betterThanAverageReduce(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((acc, prev) => acc + prev, 0) / classPoints.length;
}

console.log(betterThanAverageReduce([100, 40, 34, 57, 29, 72, 57, 88], 75)) // true
console.log(betterThanAverageReduce([29, 55, 74, 60, 11, 90, 67, 28], 21)) // false
console.log(betterThanAverageReduce([50, 50, 50], 50)) // false
