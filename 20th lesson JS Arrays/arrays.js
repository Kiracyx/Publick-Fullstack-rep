// /* Add in the end */

// const array = [1, 3, 5, 7];

// array.push(true, "mask", "elon", "fapp");
// console.log(array);

// /* Add to the begin */

// const array1 = [1, 3, 5, 7];

// array1.unshift(-7, -5, -3, -1);
// console.log(array1);

// /* Delete from the begin */

// const array2 = [1, 3, 5, 7];

// array2.shift();
// console.log(array2);

// /* Delete/add elements */

// const array3 = [1, 3, 5, 7];

// array3.splice(2, 0, array);
// console.log(array3);

// Task 1

const even = [0, 2, 4, 6, 8, 10];

const evenLength = even.length;

for (let i = 1; i < evenLength; i += 2) {
  even.splice(i, 0, i);
}

console.log(even);
