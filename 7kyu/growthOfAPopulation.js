//DESCRIPTION:
// In a small town the population is p0 = 1000 at the beginning of a year.
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
// How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

//EXAMPLES:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

//NOTE:
// Don't forget to convert the percent parameter as a percentage in the body of your function:
// if the parameter percent is 2 you have to convert it to 0.02.
//
// There are no fractions of people. At the end of each year, the population count is an integer:
// 252.8 people round down to 252 persons.

//SOLUTION:
function nbYear(p0, percent, aug, p) {

    let iterable = 0;

    for (let i = p0; i <= p; iterable++) {
        const perYear = Math.floor(i * (percent / 100) + aug)
        i += perYear
    }
    return iterable
}

console.log(nbYear(1500, 5, 100, 5000)) // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)) // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)) // 94
console.log(nbYear(1000, 2.0, 50, 1214)) // 4
