class MyArray {
  constructor() {
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    this.length = arguments.length;
  }

  shift() {
    const first = this[0];

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }

    delete this[this.length - 1];
    this.length -= 1;

    return first;
  }

  unshift() {
    const first = this[0];

    for (let i = 0; i < this.length; i++) {
      this[i + 1] = this[i];
    }

    delete this[this.length - 1];
    this.length -= 1;

    return first;
  }

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

    const newArray = {};

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      const result = callbackfn(element, i, this);

      newArray[i] = result;
    }

    return newArray;
  }
}
