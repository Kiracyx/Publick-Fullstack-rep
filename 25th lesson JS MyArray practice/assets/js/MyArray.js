class MyArray {
  constructor() {
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    this.length = arguments.length;
  }

  shift() {
    
  }
}
