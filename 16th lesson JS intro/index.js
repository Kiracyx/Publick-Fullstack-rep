//...
console.log("1 task");
const a = 2;
const a1 = 5;

console.log("a =", a, "a1 =", a1);

if (a > a1) {
  console.log("a bigger than a1");
} else {
  console.log("a less than a1");
}
//...
console.log("2 task");
const b = 2;
const b1 = "5";

if (b > b1) {
  console.log("b bigger than b1");
} else {
  console.log("b less than b1");
}
//...
console.log("3 task");
const c = 5;
const c1 = "5";

if (c == c1 && c === c1) {
  console.log("c equals с1");
} else {
  console.log("c not equals c1");
}
//...
console.log("4, 5 task");
const d = 5;
const d1 = 6;
const d2 = 5;

if (d === d1 && d === d2) {
  console.log("d equals d1 or d2");
} else {
  console.log("d not equals d1 or d2");
}
//...
console.log("6 task");
let height = 181;
let weight = 59;

if (height > 175 && weight < 60) {
  console.log("He/she is tall and thin");
} else {
  console.log("He/she is not tall and thin");
}
//...
console.log("7 task");
if (height > 175 || weight > 60) {
  console.log("It's OK");
} else {
  console.log("It's not OK");
}
//...
console.log("8 task");
const e = 2834;
console.log("2834 % 5 =", e % 5);

if (e % 5 === 0) {
  console.log("Equals 0");
} else {
  console.log("Not equals 0");
}
//...
console.log("9 task");

console.log("2834 % 2 =", 2834 % 2);

if (e % 2 === 0) {
  console.log("2834 is even");
} else {
  console.log("2834 is odd");
}
//...
console.log("10 task");
const f = 5;

if (Math.pow(f, 5) === 625) {
  console.log("f`5 equals 625");
} else {
  console.log("f`5 not equals 625");
}
console.log("f`5 equals", Math.pow(f, 5));

//...
console.log("11 task");
const g = 25;
const g1 = "a";
let sum = "";

if ((sum = Number(g) + Number(g1))) {
  console.log("It's a number. It's", sum);
} else {
  console.log("Not a number. It is a", sum);
}
//...
console.log("12 task");
const h = 525;
let h1 = "";

if ((h1 = typeof h)) {
  console.log("It's a", h1);
} else {
  console.log("It isn't a", h1);
}
//...
console.log("13 task");
const j = 525;
let j1 = "";

if ((j1 = j * 2)) {
  console.log("It's a", j1);
} else {
  console.log("It isn't a", j1);
}
