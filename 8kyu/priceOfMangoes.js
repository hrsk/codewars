// DESCRIPTION:
// Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
// But! Every third mango is free!

//SOLUTION:

function mango(quantity, price){
    if (quantity % 3 === 0) {
        return quantity * price - ((quantity / 3) * price)
    } else return quantity * price - Math.floor(quantity / 3) * price
}

console.log(mango(3, 3)) // 6
console.log(mango(9, 5)) // 30
console.log(mango(49, 16)) // 528
console.log(mango(59, 84)) // 3360