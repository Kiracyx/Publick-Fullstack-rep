const num = 101;
const str = 102;

const getSumOfTwo = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  }

  const sum = Number(num1) + Number(num2);

  return sum;
};

const result = getSumOfTwo(num, str);

console.log(result);

function getMaxOfTwo(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  }

  if (parseFloat(num1) > parseFloat(num2)) {
    return num1;
  }

  return num2;
}

console.log(getMaxOfTwo(num, str));

function getMinOfTwo(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  }

  return Math.min(num1, num2);
}

console.log(getMinOfTwo(num, str));

const e = 223;

function isEven(number) {
  if (isNaN(number)) {
    return null;
  }

  return number % 2 === 0;
}

console.log(isEven(3));

/**
 * Solves quadratic equations
 * @param {Number} a Coeff A
 * @param {Number} b Coeff B
 * @param {Number} c Coeff C
 * @returns {Number[]} Roots of quadratic equation
 */

function solveQuadraticEquation(a, b, c) {
  // type
  if (
    (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") &&
    (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
  ) {
    return null;
  }

  // convert
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return null;
  }

  const D = Math.pow(b, 2) - 4 * a * c;
  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);

  return [x1, x2];
}

console.log(solveQuadraticEquation(4, 0, -3));

// //...
// console.log("1 task");
// const a = 2;
// const a1 = 5;

// console.log("a =", a, "a1 =", a1);

// if (a > a1) {
//   console.log("a bigger than a1");
// } else {
//   console.log("a less than a1");
// }
// //...
// console.log("2 task");
// const b = 2;
// const b1 = "5";

// if (b > b1) {
//   console.log("b bigger than b1");
// } else {
//   console.log("b less than b1");
// }
// //...
// console.log("3 task");
// const c = 5;
// const c1 = "5";

// if (c == c1 && c === c1) {
//   console.log("c equals c1");
// } else {
//   console.log("c not equals c1");
// }
// //...
// console.log("4, 5 task");
// const d = 5;
// const d1 = 6;
// const d2 = 5;

// if (d === d1 && d === d2) {
//   console.log("d equals d1 or d2");
// } else {
//   console.log("d not equals d1 or d2");
// }
// //...
// console.log("6 task");
// let height = 181;
// let weight = 59;

// if (height > 175 && weight < 60) {
//   console.log("He/she is tall and thin");
// } else {
//   console.log("He/she is not tall and thin");
// }
// //...
// console.log("7 task");
// if (height > 175 || weight > 60) {
//   console.log("It's OK");
// } else {
//   console.log("It's not OK");
// }
// //...
// console.log("8 task");
// const e = 2834;
// console.log("2834 % 5 =", e % 5);

// if (e % 5 === 0) {
//   console.log("Equals 0");
// } else {
//   console.log("Not equals 0");
// }
// //...
// console.log("9 task");

// console.log("2834 % 2 =", 2834 % 2);

// if (e % 2 === 0) {
//   console.log("2834 is even");
// } else {
//   console.log("2834 is odd");
// }
// //...
// console.log("10 task");
// const f = 5;

// if (Math.pow(f, 5) === 625) {
//   console.log("f`5 equals 625");
// } else {
//   console.log("f`5 not equals 625");
// }
// console.log("f`5 equals", Math.pow(f, 5));

// //...
// console.log("11 task");
// const g = "Hello";
// sum = "";

// if (sum = isNaN(g)) {
//   console.log("Not a number");
// } else {
//   console.log("It's a number.");
// }
// //...
// console.log("12 task");
// const h = 525;
// let h1 = "";

// if ((h1 = typeof h)) {
//   console.log("It's a", h1);
// } else {
//   console.log("It isn't a", h1);
// }
// //...
// console.log("13 task");
// let j = 525;

// console.log("It's a", (sum = ++j));
