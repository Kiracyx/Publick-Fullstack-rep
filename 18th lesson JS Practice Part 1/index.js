console.log("Task 1");

function getText(text) {
  return "You wrote " + text;
}

const textRes = getText("test");

console.log(textRes);

console.log("Task 2");

function getNum(num) {
  return 5 + num;
}

const numRes = getNum(25);

console.log(numRes);

console.log("Task 3");

function getSumOfTwoStrings(string1, string2) {
  return string1 + string2;
}

const stringRes = getSumOfTwoStrings("I'm going to seek you ", "28");

console.log(stringRes);

console.log("Task 4");

function getProdOfTwo(num1, num2) {
  return num1 * num2;
}

const numOfTwoRes = getProdOfTwo(25, 2);

console.log(numOfTwoRes);

console.log("Task 5");

function getDivOfTwo(num1, num2) {
  const sumOfTwoDiv = num1 % num2;

  if (sumOfTwoDiv === 0) {
    console.log(true);
  } else {
    console.log(false);
  }

  return;
}

getDivOfTwo(25, 25);

console.log("Task 6");

function getPowOfTwo(num1, num2) {
  return Math.pow(num1, num2);
}

console.log(getPowOfTwo(5, 2));
