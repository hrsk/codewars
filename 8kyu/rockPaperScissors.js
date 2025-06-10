//INSTRUCTIONS:

// Let's play! You have to return which player won! In case of a draw return Draw!.

//EXAMPLE:
// Input1, Input2 --> Output:
//
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//SOLUTIONS:

const rps = (p1, p2) => {

    const message = (n) => `Player ${n} won!`

    if (p1 === p2) {
        return 'Draw!'
    } else if (p1 === 'rock' && p2 === 'paper') {
        return message(2)
    } else if (p1 === 'rock' && p2 === 'scissors') {
        return message(1)
    } else if (p1 === 'paper' && p2 === 'rock') {
        return message(1)
    } else if (p1 === 'paper' && p2 === 'scissors') {
        return message(2)
    } else if (p1 === 'scissors' && p2 === 'paper') {
        return message(1)
    } else if (p1 === 'scissors' && p2 === 'rock')
        return message(2)

};

console.log(rps('paper', 'paper'))
console.log(rps('scissors', 'scissors'))
console.log(rps('rock', 'rock'))
console.log(rps('rock', 'scissors'))
console.log(rps('scissors', 'paper'))
console.log(rps('paper', 'rock'))
console.log(rps('scissors', 'rock'))
console.log(rps('paper', 'scissors'))
console.log(rps('rock', 'paper'))
