// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// EXAMPLES:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//SOLUTION:

function XO(str) {
  const arrX = [];
  const arrO = [];
  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (char === "x") {
        arrX.push(char);
      } else if (char === "o") {
        arrO.push(char);
      } else return;
    });

  if (arrX.length === arrO.length) return true;
  if (
    (!arrX.length && arrO.length) ||
    (arrX.length && !arrO.length) ||
    arrX.length !== arrO.length
  )
    return false;

  //second:

  // str = str.toLowerCase().split("");
  // return (
  //   str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  // );

  //third
  // let x = str.match(/x/gi);
  // let o = str.match(/o/gi);
  // return (x && x.length) === (o && o.length);
}

console.log(XO("ooxx")); // true
console.log(XO("xooxx")); // false
console.log(XO("ooxXm")); // true
console.log(XO("zpzpzpp")); // true
console.log(XO("zzoo")); // false
