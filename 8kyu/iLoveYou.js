//Description:
// Who remembers back to their time in the schoolyard, when girls would take a flower
// and tear its petals, saying each of the following phrases each time a petal was torn:
//
// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"

// If there are more than 6 petals, you start over with "I love you" for 7 petals,
// "a little" for 8 petals and so on.
//
// When the last petal was torn there were cries of excitement, dreams,
// surging thoughts and emotions.
//
// Your goal in this kata is to determine which phrase the girls would say
// at the last petal for a flower of a given number of petals.
// The number of petals is always greater than 0.

// SOLUTION:
function howMuchILoveYou(nbPetals) {
    const phrases = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"
    ];

    return phrases[(nbPetals - 1) % phrases.length];
}

console.log(howMuchILoveYou(6)) // "not at all"
console.log(howMuchILoveYou(3)) // "a lot"
console.log(howMuchILoveYou(7)) // "I love you"

function switchCaseHowMuchILoveYou(nbPetals) {
    switch ((nbPetals - 1) % 6) {
        case 1:
            return "a little";
        case 2:
            return "a lot";
        case 3:
            return "passionately";
        case 4:
            return "madly";
        case 5:
            return "not at all";
        default:
            return "I love you";
    }
}

console.log(switchCaseHowMuchILoveYou(6)) // "not at all"
console.log(switchCaseHowMuchILoveYou(3)) // "a lot"
console.log(switchCaseHowMuchILoveYou(7)) // "I love you"