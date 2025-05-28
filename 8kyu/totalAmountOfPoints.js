//INSTRUCTIONS:

// Our football team has finished the championship.
//
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Points are awarded for each match as follows:
//
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

//NOTES:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

//SOLUTIONS:

//first

function points(games) {

    let win = 0;
    let lose = 0;
    let draw = 0;

    //TODO: Цикл for...of, который перебирает все элементы массива scoreList.
    // Каждый элемент (например, "2:0") на каждой итерации сохраняется во временной переменной score.

    for (const score of games) {

        //TODO:
        // score.split(':')
        // Делит строку по символу ":".
        // Например, "2:0" → ["2", "0"]
        // .map(Number) преобразует каждый элемент из строки в число.
        // ["2", "0"] → [2, 0]
        // const [x, y] - деструктуризация массива — это короткий способ присвоить значения переменным.

        const [x, y] = score.split(':').map(Number);

        console.log("x:", x)
        console.log("y:", y)

        if (x > y) {
            win += 3;
        } else if (x < y) {
            lose = 0;
        } else {
            draw += 1;
        }
    }

    return win + lose + draw
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))