function validatePIN(pin) {

    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }

    for (let i = 0; i < pin.length; i++) {
        if (pin[i] < '0' || pin[i] > '9') {
            return false;
        }
    }
    return true
}

console.log(validatePIN("1")) // false
console.log(validatePIN("12")) // false
console.log(validatePIN("123")) // false
console.log(validatePIN("-1")) // false
console.log(validatePIN("1.234")) // false
console.log(validatePIN("0000000000")) // false
console.log(validatePIN("a234")) // false
console.log(validatePIN(".234")) // false
console.log(validatePIN("1234")) // true