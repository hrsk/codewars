//DESCRIPTION:

// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task
//
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.
//
// EXAMPLES:
// [13, 27, 49] returns [62, 27] or (62, 27) (depending on your language)
// because the total weight of team 1 is 13+49=62 13 + 49 = 62 13+49=62 and the total weight of team 2 is 27 27 27.
// [50, 60, 70, 80] returns [120, 140] or (120, 140) (depending on your language)
// because the total weight of team 1 is 50+70=120 50 + 70 = 120 50+70=120 and the total weight of team 2 is 60+80=140 60 + 80 = 140 60+80=140.
// [80] returns [80, 0] or (80, 0) (depending on your language) because the total weight of team 1 is 80 80 80 and the total weight of team 2 is 0 0 0.

// SOLUTION:

function rowWeights(array){
    //your code here
    const arr1 = []
    const arr2 = []
    array.forEach((item, index) => {
        if (index % 2 === 0) {
            arr2.push(item)
        } else arr1.push(item)
    })

    let result2 = 0
    let result1 = 0


    for (let i = 0; i < arr2.length; i++) {
        result2 += arr2[i]
    }
    for (let i = 0; i < arr1.length; i++) {
        result1 += arr1[i]
    }
    return [result2, result1]
}

console.log(rowWeights([80])) // [80, 0]
console.log(rowWeights([100,50])) // [100, 50]
console.log(rowWeights([39,84,74,18,59,72,35,61])) // [207,235]
