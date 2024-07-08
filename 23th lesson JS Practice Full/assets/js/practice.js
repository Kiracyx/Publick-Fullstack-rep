// Task 1
console.log("Task 1");

function sayType(param) {
  if (typeof param === "number") {
    return "This is a number!";
  }
  if (typeof param === "string") {
    return "This is a string!";
  }

  return "Do not know the f-word type!";

  //   switch (typeof param) {
  //     case "number":
  //       return "This is a number!";
  //     case "string":
  //       return "This is a string!";

  //     default:
  //       return "Do not know the f-word type!";
  //   }
}

const result1 = sayType(2);
const result2 = sayType("lol^^.");
const result3 = sayType(true);
console.log(result1);
console.log(result2);
console.log(result3);

// Task 2
console.log("Task 2");

function randNum() {
  return Math.round(Math.random() * 100);
}

const result4 = randNum();

console.log(result4);

// Task 3
console.log("Task 3");

let result5 = "";

for (let i = 0; i < 7; i++) {
  result5 += "*";
}

console.log(result5);

// Task 4
console.log("Task 4");

let a = "";
const squareSize = 4;

for (let j = 0; j < squareSize; j++) {
  for (let i = 0; i < squareSize; i++) {
    a += "* ";
  }
  a += "\n";
}

console.log(a);

// Task 5
console.log("Task 5");

const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < ar1.length; index++) {
  if (ar1[index] % 2 === 1) {
    delete ar1[index]; // ar1.splice(i, 1);
  }
}

console.log(ar1);

// Task 6
console.log("Task 6");

const ar2 = [1, 2, 3, 4, 5];

for (let i = 5; i < 10; i++) {
  ar2[i] = i + 1;
}

console.log(ar2);

// Task 7
console.log("Task 7");

const ar3 = [];

for (let i = 0; i < 5; i++) {
  ar3[i] = "user" + [i + 1];
}

console.log(ar3);

// const cond = Number("user"[i]) >= 2 || Number("user"[i]) <= 4;

// if (cond) {
//   delete ar3[i];
// }

// console.log(ar3);

// Task 8
console.log("Task 8");

const ar4 = [5, 4, 3, 2, 1];

ar4.push(1, 2, 3, 4, 5);

console.log(ar4);

// Task 9
console.log("Task 9");

console.log(ar4.join(" or "));

// Task 10
console.log("Task 10");

const newArray = [4, 9, 16, 25, 36, 49];

const ar5 = newArray.map(Math.sqrt);

console.log(ar5);
