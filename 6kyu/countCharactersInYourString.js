// INSTRUCTION:

// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {

    const symbols = string.split('');

    const result = new Map();


    for (const symbol of symbols) {
        result.set(`${symbol}`, (result.get(symbol) || 0) + 1);
    }

    // return result

    // Map(0) {}
    // Map(1) { 'a' => 1 }
    // Map(2) { 'a' => 1, 'b' => 1 }
    // Map(2) { 'a' => 2, 'b' => 1 }
    // Map(3) { 'A' => 1, 'B' => 1, 'C' => 1 }

    // TODO: c помощью fromEntries()
    return Object.fromEntries(result);

    //TODO: с помощью for of
    // const resultObj = {};
    //
    // for (const [key, value] of result) {
    //     resultObj[key] = value;
    // }
    // return resultObj

}

console.log(count("")) // {}
console.log(count("a")) // {'a': 1};
console.log(count("ab")) // {'a': 1, 'b': 1};
console.log(count("aba")) // {'a': 2, 'b': 1};
console.log(count("ABC")) // {'A': 1, 'B': 1, 'C': 1};
