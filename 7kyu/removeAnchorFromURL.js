//DESCRIPTION:

// Complete the function/method so that it returns the url with anything
// after the anchor (#) removed.

//EXAMPLES:
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//SOLUTIONS:
function removeUrlAnchor(url) {
    const position = url.indexOf("#");
    if (position !== -1) {
        url.split("").slice(position, url.length)
        const result = [...url.split("").slice(0, position)].join("")
        return result
    } else return url

}

console.log(removeUrlAnchor("www.codewars.com#about")) // "www.codewars.com"
console.log(removeUrlAnchor("www.codewars.com?page=1")) // "www.codewars.com?page=1"
console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about")) // "www.codewars.com/katas/?page=1"