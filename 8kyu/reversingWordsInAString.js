// DESCRIPTION:
// You need to write a function that reverses the words in a given string. Words are always separated by a single space.
//
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

//EXAMPLE:

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
//
// Happy coding!

//SOLUTION:

function reverse(string){
    return string.split(' ').reverse().join(' ')
}

console.log(reverse('I am an expert at this')) // 'this at expert an am I'
console.log(reverse('no one cares')) // 'cares one no'