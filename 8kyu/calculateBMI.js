//DESCRIPTION:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// EXAMPLE:
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"

//SOLUTION:
function bmi(weight, height) {
    const result = weight / height ** 2
    switch (true) {
        case result <= 18.5: return "Underweight"
        case result <= 25.0: return "Normal"
        case result <= 30: return "Overweight"
        default: return "Obese"
    }

}

console.log(bmi(50, 1.80)) // "Underweight"
console.log(bmi(80, 1.80)) // "Normal"
console.log(bmi(90, 1.80)) // "Overweight"
console.log(bmi(100, 1.80)) // "Obese"