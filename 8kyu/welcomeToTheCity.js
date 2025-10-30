//DESCRIPTION:

// Create a method that takes as input a name, city, and state to welcome a person.
// Note that name will be an array consisting of one or more values that should be joined together
// with one space between each, and the length of the name array in test cases will vary.

//EXAMPLES:
// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// SOLUTION:

function sayHello( name, city, state ) {
    return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York')) // 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!'
