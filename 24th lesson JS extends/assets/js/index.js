/**
 *                                                                                     (extends) Наследование
 */

// class Cat {
//   constructor(tail = null, mustache = null, paws = null, fur = null) {
//     this.tail = tail;
//     this.mustache = mustache;
//     this.paws = paws;
//     this.fur = fur;
//   }

//   sayPurr() {
//     return "Purr";
//   }
//   sayMeow() {
//     return "Meow";
//   }
// }

// class Lion extends Cat {
//   constructor(
//     tail = null,
//     mustache = null,
//     paws = null,
//     fur = null,
//     mane = null
//   ) {
//     super(tail, mustache, paws, fur);
//     this.mane = mane;
//   }
//   sayRoar() {
//     return "Rrrrrr!";
//   }
// }

/**
 *                                                                                         Getter/Setter
 */

// class Password {
//   constructor(pass) {
//     this._pass = pass;
//   }
//   get pass() {
//     if (this.hasPassWhown === undefined) {
//       this.hasPassWhown = true;
//       return this._pass;
//     }
//     return null;
//   }

//   set pass(value) {
//     this._pass = value;
//   }
// }

class Person {
  constructor(firstname) {
    this.firstname = firstname;
    this.indicator = 0;
  }

  get getFirstname() {
    return this._firstname;
  }

  set setFirstname(newValue) {
    if (typeof newValue !== "string") {
      throw new TypeError('newValue should be typeof "string"');
    }

    if (this.indicator >= 3) {
      throw new RangeError("Cannot rename person more than 3 times");
    }
    this.indicator += 1;

    this.firstname = newValue;
  }
}
