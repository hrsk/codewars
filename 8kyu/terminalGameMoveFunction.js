//DESCRIPTION:
//In this game, the hero moves from left to right.
// The player rolls the die and moves the number of spaces indicated by the die two times.

// Create a function for the terminal game that takes the current position of the hero
// and the roll (1-6) and return the new position.

//EXAMPLE:
// move(3, 6) should equal 15

//SOLUTION:

function move(position, roll) {
    return position + roll * 2
    // return the new position
}

console.log(move(3, 6)) // 15
console.log(move(0, 5)) // 10