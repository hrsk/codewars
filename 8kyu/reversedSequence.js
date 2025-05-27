//INSTRUCTIONS:

// Build a function that returns an array of integers from n to 1 where n>0.

//EXAMPLE:

// n=5 --> [5,4,3,2,1]

//SOLUTIONS:

//first

function reverseSeq(n) {
//TODO: создаем пустой массив
    let resultArray = []

    //TODO: c помощью цикла for пушим в массив значения пока не выполнится условие i <= n
    for (let i = 1; i <= n; i++) {
        resultArray.push(i)
    }

//TODO: возвращаем перевернутый с помощью метода массива .reverse()
    return resultArray.reverse();
}

console.log(reverseSeq(5))

//second

const secondReverseSeq = n => {
    let resultArray = [];               // intialize an array

    for (let i = n; i > 0; i--) {          // loop down from n to 1
        resultArray.push(i)          // push each i to the answer array
    }

    return resultArray            //return resultArray;
};

console.log(secondReverseSeq(5))