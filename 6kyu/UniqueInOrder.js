//INSTRUCTIONS:

// Implement the function unique_in_order which takes as argument a sequence
// and returns a list of items without any elements with the same value next
// to each other and preserving the original order of elements.

//EXAMPLE:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1, 2, 2, 3, 3])       == [1, 2, 3]

// SOLUTION:

//first

const uniqueInOrder = function (iterable) {
    // проверка на массив чисел
    if (Array.isArray(iterable) && iterable.every(item => typeof item === 'number' && !isNaN(item))) {
        // 	/(.)\1+/g — регулярное выражение, которое ищет один символ (.), за которым следует один или более таких же символов \1+.
        // '$1' — замена на один символ (тот, который встретился первым).
        return iterable.join('').replace(/(.)\1+/g, '$1').split('').map(char => Number(char))
        // проверка на массив строк
    } else if (Array.isArray(iterable) && iterable.every(item => typeof item === 'string')) {
        return iterable.join('').replace(/(.)\1+/g, '$1').split('')
    } else return iterable.replace(/(.)\1+/g, '$1').split('')
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')) // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])) // [1, 2, 3]
console.log(uniqueInOrder(["a", "b", "b"])) // [1, 2, 3]

//second

const uniqueInOrder2 = function (iterable) {
    iterable = typeof iterable === 'string' ? iterable.split('') : iterable;
    // метод .filter() создаёт новый массив, содержащий только те элементы, для которых переданная функция callback возвращает true
    return iterable.filter(function (element, index, arr) {
        // условие: включить элемент в итоговый массив только если он не равен предыдущему.
        return element !== arr[index - 1];
    });
}

console.log(uniqueInOrder2('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder2('ABBCcAD')) // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder2([1, 2, 2, 3, 3])) // [1, 2, 3]
console.log(uniqueInOrder2(["a", "b", "b"])) // [1, 2, 3]