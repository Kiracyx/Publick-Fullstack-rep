const a = 2;
const a1 = 5;

console.log ("a = ", a, "a1 = ", a1)

if (a > a1) {
  console.log("a bigger than a1");
} else {
  console.log("a less than a1");
}

const b = 2;
const b1 = "5";

if (b > b1) {
  console.log("b bigger than b1");
} else {
  console.log("b less than b1");
}

const c = 5;
const c1 = "5";

if (c == c1 && c === c1) {
  console.log("c equals с1");
} else {
  console.log("c not equals c1");
}

const d = 5;
const d1 = 6;
const d2 = 5;

if (d === d1 && d === d2) {
  console.log("d equals d1 or d2");
} else {
  console.log("d not equals d1 or d2");
}

let height = 181;
let weight = 59;

if (height > 175 && weight < 60) {
  console.log("He/she is tall and thin");
} else {
    console.log("He/she is not tall and thin");
}
