//DESCRIPTION:

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
//
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

//EXAMPLES:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given
//   or `name` = ""        => return "Hello, World!"

// SOLUTION:

function hello(name) {
    if (name === "" || name === undefined || name.length === 0) return "Hello, world!"

    return `Hello, ${name.charAt(0).toUpperCase() + name.toLowerCase().slice(1, name.length)}!`
}

console.log(hello('john'))
console.log(hello('aliCE'))
console.log(hello(''))
console.log(hello())