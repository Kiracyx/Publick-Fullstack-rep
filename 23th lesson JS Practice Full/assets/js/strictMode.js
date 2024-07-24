"use strict";

/**
 *                                                                      Error examples/examples of work
 */

// let n = 034;

// test = "srict mode Error example";

function f() {
  //   this.username = "Test";
  console.log(this);
}

// f();

const f1 = () => {
  console.log(this);
};

// f1();

const obj = {
  f: function () {
    return console.log(this);
  },
  f1: () => {
    return console.log(this);
  },
  deep: {
    f2: () => {
      return console.log(this);
    },
  },
};

// obj.f();
// obj.f1();
// obj.deep.f2();

function f2() {
  console.log(this);

  const f = () => {
    console.log(this);
  };
  f();
}

f2();

class MyClass {
  constructor() {
    this.f = function () {
      console.log(this);
    };
    this.f1 = () => {
      console.log(this);
    };
  }
}

const myClass = new MyClass();

myClass.f();
myClass.f1();
