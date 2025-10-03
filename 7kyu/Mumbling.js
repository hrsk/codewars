// DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

//EXAMPLE:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

//SOLUTION:

function accum(s) {

    //TODO: соединение массива с помощью спред оператора

    return s.toLowerCase().split('').map((symbol, index) => {
        const symbols = symbol.repeat(index + 1)
        return [
            ...symbols.split('').slice(0, symbols.length)[0].toUpperCase(),
            ...symbols.split('').slice(1, symbols.length)].join('')
    }).join('-')

    // return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');

}

console.log(accum('ZpglnRxqenU')) // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"