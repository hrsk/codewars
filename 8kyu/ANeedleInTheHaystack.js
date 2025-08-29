// DESCRIPTION:

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of
// junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:
//
// "found the needle at position " plus the index it found the needle, so:

// EXAMPLE:

// ["hay", "junk", "hay", "hay", "moreJunk",
// "needle", "randomJunk"] --> "found the needle at position 5"

// ['283497238987234', 'a dog', 'a cat', 'some random junk',
// 'a piece of hay', 'needle',
// 'something somebody lost a while ago'] --> "found the needle at position 5"

// SOLUTIONS:

function findNeedle(haystack) {
    const index = haystack.findIndex(value => value === 'needle')
    return `found the needle at position ${index} `
    // your code here
}


console.log(findNeedle(
    ['283497238987234', 'a dog', 'a cat', 'some random junk',
        'a piece of hay', 'needle',
        'something somebody lost a while ago']))

//second:

function secondFindNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

console.log(secondFindNeedle(
    ['283497238987234', 'a dog', 'a cat', 'some random junk',
        'a piece of hay', 'needle',
        'something somebody lost a while ago']))

//third:

function thirdFindNeedle(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'needle')
            return `found the needle at position ${i}`;
    }
}

console.log(thirdFindNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk',
    'a piece of hay', 'needle',
    'something somebody lost a while ago']))