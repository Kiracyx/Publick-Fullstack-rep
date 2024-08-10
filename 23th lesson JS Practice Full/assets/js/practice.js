// // Task 1
// console.log("Task 1");

// function sayType(param) {
//   if (typeof param === "number") {
//     return "This is a number!";
//   }
//   if (typeof param === "string") {
//     return "This is a string!";
//   }

//   return "Do not know the f-word type!";

//   //   switch (typeof param) {
//   //     case "number":
//   //       return "This is a number!";
//   //     case "string":
//   //       return "This is a string!";

//   //     default:
//   //       return "Do not know the f-word type!";
//   //   }
// }

// const result1 = sayType(2);
// const result2 = sayType("lol^^.");
// const result3 = sayType(true);
// console.log(result1);
// console.log(result2);
// console.log(result3);

// // Task 2
// console.log("Task 2");

// function randNum() {
//   return Math.round(Math.random() * 100);
// }

// const result4 = randNum();

// console.log(result4);

// // Task 3
// console.log("Task 3");

// let result5 = "";

// for (let i = 0; i < 7; i++) {
//   result5 += "*";
// }

// console.log(result5);

// // Task 4
// console.log("Task 4");

// let a = "";
// const squareSize = 4;

// for (let j = 0; j < squareSize; j++) {
//   for (let i = 0; i < squareSize; i++) {
//     a += "* ";
//   }
//   a += "\n";
// }

// console.log(a);

// // Task 5
// console.log("Task 5");

// const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < ar1.length; index++) {
//   if (ar1[index] % 2 === 1) {
//     delete ar1[index]; // ar1.splice(i, 1);
//   }
// }

// console.log(ar1);

// // Task 6
// console.log("Task 6");

// const ar2 = [1, 2, 3, 4, 5];

// for (let i = 5; i < 10; i++) {
//   ar2[i] = i + 1;
// }

// console.log(ar2);

// // Task 7
// console.log("Task 7");

// const ar3 = [];

// for (let i = 0; i < 5; i++) {
//   ar3[i] = "user" + [i + 1];
// }

// console.log(ar3);

// // const cond = Number("user"[i]) >= 2 || Number("user"[i]) <= 4;

// // if (cond) {
// //   delete ar3[i];
// // }

// // console.log(ar3);

// // Task 8
// console.log("Task 8");

// const ar4 = [5, 4, 3, 2, 1];

// ar4.push(1, 2, 3, 4, 5);

// console.log(ar4);

// // Task 9
// console.log("Task 9");

// console.log(ar4.join(" or "));

// // Task 10
// console.log("Task 10");

// const newArray = [4, 9, 16, 25, 36, 49];

// const ar5 = newArray.map(Math.sqrt);

// console.log(ar5);

// const month = 1;
// const season = Math.ceil(month / 4);

// switch (season) {
//   case 1:
//     console.log("Spring");
//     break;
//   case 2:
//     console.log("Summer");
//     break;
//   case 3:
//     console.log("Autumn");
//     break;
//   case 4:
//     console.log("Winter");
//     break;
// }

// const age = 17;

// if (age >= 18) {
//   console.log("Eligble");
// } else {
//   console.log("Uneligble");
// }

// const sqrt = Math.sqrt(age);

// if (Math.round(sqrt) === sqrt
// // Number.isInteger(sqrt)
// ) {
//   console.log("Without a remainder of the division");
// } else {
//   console.log("With a remainder of the division");
// }

// const ar6 = new Array();

// for (let i = 1; i <= 10; i++) {
//   ar6.push(i);
// }

// console.log(ar6);

// const ar7 = ar6.slice();

/**
 *                                                                        Spread
 */

// const ar7 = [...ar6];

// console.log(ar7);

// const ar8 = new Array();

// const halfOfLength = Math.floor(ar7.length / 2);

// for (let i = 0; i < halfOfLength; i++) {
//   const elem = ar7[i];
//   ar8.push(elem);
// }

// console.log(ar8);

// const ar9 = new Array();

// for (let i = halfOfLength; i < ar7.length; i++) {
//   const elem = ar7[i];
//   ar9.push(elem);
// }

// console.log(ar9);
// const ar10 = new Array(1, 2, 43, 567, 6543);

// function func1(ar) {
//   let newArray = new Array();
//   newArray = [...ar];

//   return newArray;
// }

// let ar11 = func1(ar10);

// console.log(ar11);

// function func2(ar1, ar2) {
//   let newArray = [...ar1] + [...ar2];

//   return newArray;
// }

// console.log(func2(ar10, ar11));

/**
 *                                                                        Destructuring of Arrays
 */

// const ar12 = ["first", 2, "third", 4, "fifth"];

// function getFirstElementF(array) {
//   const [firstElement] = array;

//   return firstElement;
// }

// function getFifthElementF(array) {
//   const [, , , , fifthElement] = array;

//   return fifthElement;
// }

// function getSecAndThirdElementsF(array) {
//   const [, secondElement, thirdElement] = array;

//   return `${secondElement}, ${thirdElement}`;
// }

// console.log(getFirstElementF(ar12));
// console.log(getFifthElementF(ar12));
// console.log(getSecAndThirdElementsF(ar12));

/**
 *                                                                        Destructuring of Objects
 */

// const obj1 = {
//   name: "Ferruccio",
//   surname: "Lamborghini",
//   email: "ferruccio.lamborghini1@italianomail.it",
//   phones: {
//     home: "23-23432-123",
//     cellphone: "+3999900099900",
//   },
//   address: {
//     street: {
//       name: "Torino street",
//       number: 231,
//     },
//     city: "Ferrara",
//   },
// };

// function getUserEmail(obj) {
//   const { email } = obj;

//   return email;
// }

// function getUserFullname(obj) {
//   const { name, surname } = obj;

//   return `${surname} ${name}`;
// }

// function getUserPhones(obj) {
//   const { phones } = obj;

//   return { phones };
// }

// function getUserAdress(obj) {
//   const { address } = obj;
//   if (!Boolean(address)) {
//     return null;
//   }

//   // return Object.assign({}, address);
//   return {
//     ...address,
//     street: {
//       ...address.street,
//     },
//   };
// }

// function getUserStreetName(obj) {
//   const {
//     address: { street = null  },
//   } = obj;
//   if (!Boolean(address) && !Boolean(street)) {
//     return null;
//   }

//   return address.street.name;
// }

// const userEmail = getUserEmail(obj1);
// const userFullname = getUserFullname(obj1);
// const userPhones = getUserPhones(obj1);
// const userAdress = getUserAdress(obj1);
// const userStreetName = getUserStreetName(obj1);

// console.log(userEmail);
// console.log(userFullname);
// console.log(userPhones);
// console.log(userAdress);
// console.log(userStreetName);

/**
 *                                                                        try{} catch {} finally {}
 */

// try {
//   new Symbol();
// } catch (error) {
//   console.dir(error);
// }

/**
 *                                                                         Closure
 */

function outerFn() {
  let arb = "Hello!";

  function firstInnerFn() {
    let hW = arb + " World!!!";

    function secondInnerFn() {}
    console.dir(secondInnerFn);
    return hW;
  }
  return firstInnerFn;
}

const test = outerFn();

test();
