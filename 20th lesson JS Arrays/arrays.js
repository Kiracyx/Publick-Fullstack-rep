/* Add in the end */

// const array = [1, 3, 5, 7];

// array.push(true, "mask", "elon", "fapp");
// console.log(array);

/* Add to the begin */

// const array1 = [1, 3, 5, 7];

// array1.unshift(-7, -5, -3, -1);
// console.log(array1);

/* Delete from the begin */

// const array2 = [1, 3, 5, 7];

// array2.shift();
// console.log(array2);

// /* Delete/add elements */

// const array3 = [1, 3, 5, 7];

// array3.splice(2, 0, array);
// console.log(array3);

// Task

// const even = [0, 2, 4, 6, 8, 10];

// const evenLength = even.length;

// for (let i = 1; i < evenLength; i += 2) {
//   even.splice(i, 0, i);
// }

// console.log(even);

/* PRACTICE */

// Task 1

console.log("Task 1");

const ar1 = [];

for (let i = 1; i < 11; i++) {
  ar1.push(i);
}
console.log(ar1);

// Task 2

console.log("Task 2");

ar1.unshift(0);
console.log(ar1);

// Task 3

console.log("Task 3");

ar1.pop(1);
console.log(ar1);

ar1.shift();
console.log(ar1);

// Task 4

console.log("Task 4");

ar1.splice(3, 1);
console.log(ar1);

// Task 5

console.log("Task 5");

ar1.splice(3, 1, 5);
console.log(ar1);

// Task 6

console.log("Task 6");

const ar2 = [];

Object.assign(ar2, ar1);

console.log(ar2);

// Task 7

console.log("Task 7");

for (let i = 0; i < ar2.length / 2; i++) {
  ar2.pop();
}

console.log(ar2);

// Task 8

console.log("Task 8");

const ar3 = Array(8);

console.log(ar3);

// Task 9

console.log("Task 9");

ar3.fill(0, 0, ar3.length / 2);

console.log(ar3);

// Task 10

console.log("Task 10");

const result = ar3.filter((value) => value === 0);

console.log(result);

// Task 11

console.log("Task 11");

const ar4 = Array(10);

console.log(ar4);

const ar4Length = ar4.length;

for (let i = 1; i < ar4Length + 1; i++) {
  ar4.splice(i - 1, ar4Length, i);
}
console.log(ar4);

const ar5 = ar4.map((index) => Math.pow(index, 2));

console.log(ar5);

// Task 12

console.log("Task 12");

const ar6 = ["Hello", "world!!!"];

console.log(ar6.join(" && "));

// Task 13

console.log("Task 13");

class products {
  brand = null;
  price = null;
  amountInStorage = null;
  isLeftInStorage = null;
  constructor(brand, price, amountInStorage, isLeftInStorage) {
    this.brand = brand;
    this.price = price;
    this.amountInStorage = amountInStorage;
    this.isLeftInStorage = isLeftInStorage;
  }
}

const prod1 = new products("Geon Scrumbler", 2000, 6, true);
const prod2 = new products("Ducatti Scrumbler", 16500, 4, true);
const prod3 = new products("Honda Scrumbler", 12300, 0, false);
const prod4 = new products("BMW Scrumbler", 19199, 5, true);
const prod5 = new products("RoyalField Scrumbler", 25999, 0, false);

console.log(prod1, prod2, prod3, prod4, prod5);

const ar7 = [prod1, prod2, prod3, prod4, prod5];

console.log(ar7);

// Task 14

console.log("Task 14");

const filteredProducts = ar7
  .filter((value) => value.isLeftInStorage === true)
  .filter((value) => value.amountInStorage >= 5);

console.log(filteredProducts);

// Task 15

console.log("Task 15");

const basket = [];

function addToBasket() {
  let userProduct = Number(
    prompt("Введите номер товара (0 - 4), чтобы добавить его в корзину")
  );

  while (userProduct < 0 || userProduct > 4 || isNaN(userProduct)) {
    userProduct = Number(
      prompt("Вы ввели неправильный номер продукта, введите номер от 0 до 4")
    );
  }

  basket.push(JSON.parse(JSON.stringify(ar7[userProduct])));

  return basket;
}

addToBasket();

console.log(basket);
