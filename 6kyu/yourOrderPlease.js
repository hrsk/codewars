//INSTRUCTIONS:

// Your task is to sort a given string.
// Each word in the string will contain a single number.
// This number is the position the word should have in the result.

//EXAMPLE:
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//NOTES:

// Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// SOLUTION:

function order(words) {
    // если приходит пустая строка, то и возврщаем пусткую строку
    if (!words || words.trim() === "") {
        return ""
    }

    // с помощью метода split(' ') — разбиваем строку на слова
    const arrayWords = words.split(' ');

    // Отфильтровать и отсортировать по числу, содержащемуся в каждом слове
    const sortedWords = arrayWords
        .filter(word => /\d/.test(word)) // оставляем только слова с цифрами
        .sort((a, b) => { // .sort(...) — сортируем слова по числу внутри них
            const numA = parseInt(a.match(/\d/)[0]);// .match(/\d/) — находит первую цифру в слове
            //TODO: /\d/ — это регулярное выражение (регулярка):
            // / ... / — синтаксис объявления регулярного выражения в JavaScript.
            // \d — специальный символ, означающий “любая одна цифра” (от 0 до 9).
            const numB = parseInt(b.match(/\d/)[0]);
            return numA - numB;
        });

    return sortedWords.join(' '); // .join(' ') — собирает отсортированные слова обратно в строку.

}

console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")) // "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order(""))
