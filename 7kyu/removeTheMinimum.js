//INSTRUCTIONS:

// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits.
// Miriam, the interior architect, comes up with a plan to remove the most
// boring exhibits.
// She gives them a rating, and then removes the one with the lowest rating.
//
// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Given an array of integers, remove the smallest value.
// Do not mutate the original array/list.
// If there are multiple elements with the same value,
// remove the one with the lowest index.
// If you get an empty array/list, return an empty array/list.
//
// Don't change the order of the elements that are left.

//EXAMPLE:
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// SOLUTION:

function removeSmallest(numbers) {
    //TODO: объявляем переменную min и присваиваем ей значение Infinity — это
    // специальное значение, представляющее бесконечно большое число.
    // Это нужно, чтобы любое реальное число из массива оказалось меньше,
    // и мы смогли найти наименьшее значение.
    let min = Infinity;
    //TODO:  цикл for...of проходит по всем элементам массива numbers
    // на каждой итерации переменная num получает очередное число из массива.
    for (const num of numbers) {
        //TODO: если текущее число num меньше, чем текущее минимальное min, то
        // обновляем min, присваивая ему значение num.
        if (num < min) min = num;
    }

    const removeItemIndex = numbers.findIndex(number => number === min)
    return numbers.filter((_, index) => index !== removeItemIndex)
}

console.log(removeSmallest([1, 2, 3, 4, 5])) // [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])) // [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])) // [2, 2, 2, 1]
console.log(removeSmallest([2, 2, 1, 2, 1, 1])) // [2, 2, 2, 1]

//second
function secondRemoveSmallest(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

console.log(secondRemoveSmallest([1, 2, 3, 4, 5])) // [2, 3, 4, 5]
console.log(secondRemoveSmallest([5, 3, 2, 1, 4])) // [5, 3, 2, 4]
console.log(secondRemoveSmallest([2, 2, 1, 2, 1])) // [2, 2, 2, 1]
console.log(secondRemoveSmallest([2, 2, 1, 2, 1, 1])) // [2, 2, 2, 1]