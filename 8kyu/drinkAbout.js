//DESCRIPTION:

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
//
// Rules:
//
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

//EXAMPLE:
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"


//SOLUTION:
function peopleWithAgeDrink(old) {
    switch (true) {
        case old < 14: {
            return "drink toddy"
        }
        case old < 18: {
            return "drink coke"
        }
        case old < 21: {
            return "drink beer"
        }
        case old >= 21: {
            return "drink whisky"
        }
    }
};

console.log(peopleWithAgeDrink(13)) // "drink toddy"
console.log(peopleWithAgeDrink(17)) // "drink coke"
console.log(peopleWithAgeDrink(18)) // "drink beer"
console.log(peopleWithAgeDrink(20)) // "drink beer"
console.log(peopleWithAgeDrink(22)) // "drink whisky"

