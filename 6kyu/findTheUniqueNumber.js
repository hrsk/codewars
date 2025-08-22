// DESCRIPTION:
// There is an array with some numbers.
// All numbers are equal except for one. Try to find it!

// EXAMPLE:
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    // do magic

    const frequencyNumbers = new Map(); // Map(0) {} пустая хеш-таблица

    // Подсчет количества вхождений
    // цикл for проходит по всем элементам массива переданного нам
    // в параметры функции

    for (const num of arr) {
        frequencyNumbers.set(num, (frequencyNumbers.get(num) || 0) + 1);

        // [2, 3, 5, 1, 5, 3, 2]:
        // 	num = 2: get(2) -> undefined → (undefined || 0) + 1 = 1 → set(2, 1)
        // 	num = 3: get(3) -> undefined → set(3, 1)
        // 	num = 5: get(5) -> undefined → set(5, 1)
        // 	num = 1: get(1) -> undefined → set(1, 1)
        // 	num = 5: get(5) -> 1 → 1 + 1 = 2 => set(5, 2)
        // 	num = 3: get(3) -> 1 → 1 + 1 = 2 => set(3, 2)
        // 	num = 2: get(2) -> 1 → 1 + 1 = 2 => set(2, 2)
    }

    // newArray = Map { 2 => 2, 3 => 2, 5 => 2, 1 => 1  }

    // Поиск уникального значения
    for (const [number, count] of frequencyNumbers) {
        if (count === 1) {
            //	Цикл for (const [number, count] of newArray)
            //	перебирает пары [число, значение] в порядке вставки:
            // 	[2, 2] => count !== 1 → пропускаем
            // 	[3, 2] => count !== 1 → пропускаем
            // 	[5, 2] => count !== 1 → пропускаем
            // 	[1, 1] => count === 1 → return 1
            return number
        }
    }

    // если без return, будет неявный return undefined
    return null; // если уникального нет
}

console.log(findUniq([2, 3, 5, 1, 5, 3, 2])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([1, 1, 1, 2, 2, 1, 1 ])); // null

function secondFindUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
    // return arr.find(n => arr.indexOf(n)); // 3
    // return arr.find(n => arr.lastIndexOf(n)); // 2
}
console.log(secondFindUniq([2, 3, 5, 1, 7, 5, 3, 2])); // 1
console.log(secondFindUniq([1, 1, 1, 2, 1, 1 ])); // 2
console.log(secondFindUniq([1, 1, 1, 2, 2, 1, 1 ])); // undefined