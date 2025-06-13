//INSTRUCTIONS:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

//EXAMPLE:
// [1, 2, 2] it should return 9
// because 1^2 + 2^2 + 2^2 = 9

// SOLUTION:

//first
function squareSum(numbers) {
    let result = 0

    let squareResult = numbers.map(num => num * num)

    for (let i = 0; i < squareResult.length; i++) {
        result += squareResult[i]
    }
    return result
}

console.log(squareSum([1, 2, 2])) // 9

//second

function secondSquareSum(numbers){
    //TODO: sum накопитель или аккумулятор
    // num текущий элемент массива

    //TODO: Второй аргумент функции reduce -- начальное значение аккумулятора sum задано равным 0.
    return numbers.reduce((sum,num) => sum + (num * num), 0);

    //TODO: На каждой итерации:
    // num возводится в квадрат (num * num)
    // значение квадрата прибавляется к текущему значению sum
    // reduce возвращает итоговую сумму всех квадратов элементов массива.
}

console.log(secondSquareSum([1, 2, 2])) // 9
