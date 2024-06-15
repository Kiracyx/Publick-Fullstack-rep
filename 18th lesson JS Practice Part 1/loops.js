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

function getMultiplNum(num1, num2) {
  let sum = "";

  for (let i = 0; i < 5; i++) {
    sum = num1 * num2;
    console.log(sum);
  }
}

getMultiplNum(105, 3);


console.log("Task 5");

function getMultiplNumber(num1) {
  let sum = "";

  for (let i = 0; i < 5; i++) {
    sum = num1 * [i];
    console.log(sum);
  }
}

getMultiplNumber(105);