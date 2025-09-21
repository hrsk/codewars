// INSTRUCTION:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy,
// different numbers have different prices (refer to the following table),
// return how much money will the customer spend to buy that number of hotdogs.


// number of hotdogs	price per unit (cents)
// n < 5	            100
// n >= 5 and n < 10	95
// n >= 10	            90

// SOLUTION:

function saleHotDogs(n) {
    if (n >= 10) {
        return n * 90
    } else if (n >= 5) {
        return n * 95
    } else return n * 100
}


console.log(saleHotDogs(1)) // 100
console.log(saleHotDogs(4)) // 400
console.log(saleHotDogs(5)) // 475
console.log(saleHotDogs(10)) // 900
console.log(saleHotDogs(100)) // 9000