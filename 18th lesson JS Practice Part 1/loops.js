console.log("Loops. Task 1");

function getHelloLoop() {
  for (let step = 0; step < 5; step++) {
    console.log("Hello loop");
  }
}

getHelloLoop();

console.log("Task 2");

function getLoop() {
  for (let i = 0; i < 5; i++) {
    console.log("Loop " + i);
  }
}

getLoop();

console.log("Task 3");

function getNumLoop(num) {
  for (let i = 0; i < 5; i++) {
    console.log(num);
  }

  return console.log("Our number =", num);
}

getNumLoop(5);

console.log("Task 4");

function getMultiplNumber(num1, num2) {
  let sum = 0;

  for (let i = 0; i < 5; i++) {
    sum += num1 * num2;
  }
  console.log(Number(sum));
}

getMultiplNumber(105, 2);

console.log("Task 5");

function getMultiplNum(num) {
  let sumNum = 1;

  for (let i = 1; i <= num; i++) {
    sumNum *= i;
  }
  return sumNum;
}

console.log(getMultiplNum(5));

console.log("Task 6");

function calcPower(val, power) {
  let sumPow = 1;

  for (let i = 0; i < power; i++) {
    sumPow *= val;
  }
  return sumPow;
}

console.log(calcPower(5, 3));