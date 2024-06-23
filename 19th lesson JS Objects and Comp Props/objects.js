const user = {
  firstname: "Jhon",
  age: 32,
};

console.log(user);

const cat = {
  tailLength: 20,
  sayMeow: function () {
    return "Meow";
  },
};

console.log(cat, cat.sayMeow());

const Jiraph = {
  age: 25,
  weight: 235,
  asleep: true,
  bodyHeight: 3.5,
  neckLength: 3,
  stature: function () {
    if (
      typeof this.bodyHeight !== "number" ||
      typeof this.neckLength !== "number"
    ) {
      return null;
    }
    if (isNaN(this.bodyHeight) || isNaN(this.neckLength)) {
      return null;
    }
    const sum = this.bodyHeight + this.neckLength;
    return `Jiraph stature is ` + Number(sum);
  },
  waky: function () {
    if (this.asleep === true) {
      return (this.asleep = false);
    }
  },
};

console.log(Jiraph.stature());

Jiraph.waky();

console.log(Jiraph.asleep);

// class motorcycle {
//   brand = null;
//   tankCapacity = null;
//   engineModel = null;
//   seats = null;
//   currentSpeed = 100;
//   constructor(brand1, tankCapacity1, engineModel1, seats1) {
//     this.brand = brand1;
//     this.tankCapacity = tankCapacity1;
//     this.engineModel = engineModel1;
//     this.seats = seats1;
//   }

//   increaseSpeed() {
//     return (this.currentSpeed += 55);
//   }
//   decreaseSpeed() {
//     return (this.currentSpeed -= 20);
//   }
//   stopTheVehicle() {
//     return (this.currentSpeed = 0);
//   }
// }

// const HYZ = new motorcycle("GeonScrumbler", 12, "asda212", 2);

// console.log(HYZ);
// HYZ.increaseSpeed();
// console.log(HYZ);

const motorcycle = function (
  brand = null,
  tankCap = null,
  engModel = null,
  seats = null
) {
  this.brand = brand;
  this.tankCap = tankCap;
  this.engModel = engModel;
  this.seats = seats;
  this.currentSpeed = 100;
  this.increaseSpeed = function () {
    return (this.currentSpeed += 55);
  };
  this.decreaseSpeed = function () {
    return (this.currentSpeed -= 20);
  };
  this.stopTheVehicle = function () {
    return (this.currentSpeed = 0);
  };
};

const mot1 = new motorcycle(1, 2, 3, 4);

console.log(mot1);
mot1.increaseSpeed();
console.log(mot1);