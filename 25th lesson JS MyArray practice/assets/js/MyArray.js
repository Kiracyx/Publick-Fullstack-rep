class MyArray {
  constructor(...rest) {
    for (let i = 0; i < rest.length; i++) {
      this[i] = rest[i];
    }
    this.length = rest.length;
  }

  push(...rest) {
    for (let i = 0; i < rest.length; i++) {
      this[i + this.length] = rest[i];
    }
    this.length += rest.length;

    return this.length;
  }

  shift() {
    const first = this[0];

    if (this.length === 0) {
      return undefined;
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }

    delete this[this.length - 1];
    this.length -= 1;

    return first;
  }

  // unshift(...rest) {
  //   for (let i = 0; i < this.length; i++) {
  //     this[i] = value;
  //     this[i + 1] = this[i];
  //   }

  //   return (this.length += 1);
  // }

  forEach(callbackfn) {
    if (typeof callbackfn !== "function") {
      throw new TypeError(callbackfn + " is not a function");
    }
    for (let i = 0; i < this.length; i++) {
      const element = this[i];
      if (element !== undefined) {
        callbackfn(element, i, this);
      }
    }
  }

  map(callbackfn) {
    if (typeof callbackfn !== "function") {
      throw new TypeError(callbackfn + " is not a function");
    }

    const newArray = new MyArray();

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      const result = callbackfn(element, i, this);

      newArray.push(result);
    }

    return newArray;
  }

  findIndex(callbackfn) {
    if (typeof callbackfn !== "function") {
      throw new TypeError(callbackfn + " is not a function");
    }

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      const result = callbackfn(element, i, this);

      if (Boolean(result)) {
        return i;
      }
    }
    return -1;
  }
}

const arr = new MyArray(1, 2, 3, 4, 5);

// console.log(
//   arr.findIndex((element) => {
//     return element % 2 === 0;
//   })
// );
