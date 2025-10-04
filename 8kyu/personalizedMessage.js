//DESCRIPTION:
// Create a function that gives a personalized greeting.
// This function takes two parameters: name and owner.

//EXAMPLE:
// case                 return
// name equals owner	'Hello boss'
// otherwise	        'Hello guest'

//SOLUTION:
function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
}

console.log(greet('Daniel', 'Daniel')) // 'Hello boss'
console.log(greet('Greg', 'Daniel')) // 'Hello guest'