//INSTRUCTIONS:

// You're writing code to control your town's traffic lights.
// You need a function to handle each change from green, to yellow, to red, and then to green again.
//
// Complete the function that takes a string asan argument representing
// the current state of the light and returns a string representing the
// state the light should change to.

//EXAMPLE:
// When the input is green, output should be yellow.

// SOLUTION:

//first
function updateLight(current) {

    //your code here!
    switch (current) {
        case 'green':
            return 'yellow'
        case 'yellow':
            return 'red'
        case 'red':
            return 'green'
        default:
            return current

    }
}


console.log(updateLight("green")) // yellow
console.log(updateLight("yellow")) // red
console.log(updateLight("red")) // green

//second

//TODO: стрелочная функция, которая принимает один аргумент current

const secondUpdateLight = (current) => {
    //TODO: объект, который описывает какой цвет должен идти следующим
    // после каждого текущего цвета.
    return {
        green: 'yellow',
        yellow: 'red',
        red: 'green',
    }[current] //TODO: обращение к значению по ключу в объекте
    // взять значение из объекта, где ключ равен current.
}
// TODO: неявный return в стрелочной функции.
//  Чтобы интерпретатор не подумал, что открывается тело функции,
//  объект оборачивается в круглые скобки (...).

// const secondUpdateLight = (current) => ({
//     green: 'yellow',
//     yellow: 'red',
//     red: 'green',
// })[current];

console.log(secondUpdateLight("green")) // yellow
console.log(secondUpdateLight("yellow")) // red
console.log(secondUpdateLight("red")) // green

//third

function thirdUpdateLight(current) {
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green'
}

console.log(thirdUpdateLight("green")) // yellow
console.log(thirdUpdateLight("yellow")) // red
console.log(thirdUpdateLight("red")) // green