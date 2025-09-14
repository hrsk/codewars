//INSTRUCTIONS:

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
//
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// INPUT:
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//
// OUTPUT:
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// EXAMPLE:
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// SOLUTIONS:

function openOrSenior(data) {
    // ...
    const memberships = []
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            memberships.push('Senior')
        } else memberships.push('Open')
    }
    return memberships
}

console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]])) // ['Senior', 'Open', 'Open', 'Open']


// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSeniorDestructing(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

console.log(openOrSeniorDestructing([[59, 12], [55, -1], [12, -2], [12, 12]])) // ['Senior', 'Open', 'Open', 'Open']
