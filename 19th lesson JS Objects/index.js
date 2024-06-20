// expression = выражение
const apple = {
  color: "red",
  size: 80,
  divide: function () {
    this.size -= 10;
  },
};

// вычисляемые свойства

const safehouse = {
  appleGreen: 30,
  appleRed: 50,
  appleYellow: 10,

  orange: 50,
  cucumber: 40,
  tomato: 30,

  1: "test1",
  2: "test2",
  10: "test10",
};

function reduceTomatoes(sklad) {
  sklad.tomato -= 10;
}

reduceTomatoes(safehouse);

for (let i = 0; i < 3; i++) {
  console.log(
    safehouse[
      `apple${color(i)}` // шаблонные строки
    ]
  );
}

function color(index) {
  if (index === 0) {
    return "Green";
  }

  if (index === 1) {
    return "Red";
  }

  if (index === 2) {
    return "Yellow";
  }
}

//Tasks

const iLiveIn = "Ukraine";

console.log(`Я живу в ${iLiveIn}`);

//

const firstname = "Ivan";
const id = 39;

console.log(`${firstname}_${id}`);

//

const countryA = "Belorussia";
const countryB = "USA";
const countryC = "GreatBritain";
const cityA = "London";
const cityB = "Minsk";
const cityC = "NY";

console.log(`${cityA} is a capital of ${countryC}`);
console.log(`${cityB} is a capital of ${countryA}`);
console.log(`${cityC} is a capital of ${countryB}`);
