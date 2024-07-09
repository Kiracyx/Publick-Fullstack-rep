class Queue {
  constructor() {
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    this.tail = arguments.length;
    this.head = 0;
  }

  push(element) {
    this[this.tail++] = element;
  }

  pop() {
    if (this.tail === this.head) {
      return undefined;
    }

    const element = this[this.head];

    delete this[this.head++];

    return element;
  }
}

const queue = new Queue(1, 2, 3, 4, 5);

console.log(queue);