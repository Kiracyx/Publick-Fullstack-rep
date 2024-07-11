class Queue {
  constructor() {
    this.queue = {};
    
    this.tail = 0;

    for (let i = 0; i < arguments.length; i++) {
      const element = arguments[i];
      this.push(element);
    }

    this.tail = arguments.length;

    this.head = 0;
  }

  push(element) {
    this.queue[this.tail++] = element;
  }

  shift() {
    if (this.tail === this.head) {
      return undefined;
    }

    const element = this.queue[this.head];

    delete this.queue[this.head++];

    return element;
  }
}

const queue = new Queue(1, 2, 3, 4, 5);

console.log(queue);
