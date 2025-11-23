// DESCRIPTION:
// This program tests the life of an evaporator containing a gas.
//
// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
//
// The program reports the nth day (as an integer) on which the evaporator will be out of use.
//
// EXAMPLE:
//
// evaporator(10, 10, 5) -> 29
//
// NOTE:
//
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish.
// Some people might prefer to reason with content, some other with percentages only.
// It's up to you but you must keep it as a parameter because the tests have it as an argument.
//
// SOLUTION:

function evaporator(content, evapPerDay, threshold) {

    let days = 0
    for (let i = content; i > (content*threshold) / 100; i = (i - ((i*evapPerDay) / 100))) {
        days++
    }
    return days

}

console.log(evaporator(10, 10, 5)) // 29