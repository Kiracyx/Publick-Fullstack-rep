console.log("Functions. Task 1");

function getText(text) {
  return "You wrote " + text;
}

const textRes = getText("1");

console.log(textRes);

console.log("Task 2");

function getNum(num) {
  if (isNaN(num)) {
    return null;
  }

  return 5 + Number(num);
}

const numRes = getNum(25);

console.log(numRes);

console.log("Task 3");

function getSumOfTwoStrings(string1, string2) {
  if (typeof (string1 && string2) !== "string") {
    return null;
  }
  return string1 + string2;
}

const stringRes = getSumOfTwoStrings("I'm going to seek you ", "28");

console.log(stringRes);

console.log("Task 4");

function getProdOfTwo(num1, num2) {
  if (isNaN(num1 && num2)) {
    return null;
  }

  return Number(num1) * Number(num2);
}

const numOfTwoRes = getProdOfTwo(25.3, "5");

console.log(numOfTwoRes);

console.log("Task 5");

function getDivOfTwo(num1, num2) {
  const sumOfTwoDiv = num1 % num2;

  if (
    typeof (num1 && num2) !== "number" &&
    typeof (num1 && num2) !== "string"
  ) {
    return null;
  }

  if (sumOfTwoDiv === 0) {
    console.log(true);
  } else {
    console.log(false);
  }

  return;
}

getDivOfTwo(25, "25");

console.log("Task 6");

function getPowOfTwo(num1, num2) {
  return Math.pow(num1, num2);
}

console.log(getPowOfTwo(5, 2));

console.log("Task 7");

function getSquareOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

console.log(getSquareOfCircle(5));

// console.log("Task 8*");

// function calcNeededOper(num1, num2) {
//   window.prompt("Введите желаемый оператор", "+");

//   let op = num1 + num2;

//   switch (op) {
//     case "+": {
//       op = num1 + num2;
//       break;
//     }
//   }
//   switch (op) {
//     case "-": {
//       op = num1 - num2;
//       break;
//     }
//   }
//   switch (op) {
//     case "*": {
//       op = num1 * num2;
//       break;
//     }
//   }
//   switch (op) {
//     case "/": {
//       op = num1 / num2;
//       break;
//     }
//   }
// }

// const operRes = calcNeededOper(5, 5);
// console.log(operRes);
