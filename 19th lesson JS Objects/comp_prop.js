// Task1
const compTail = {
  tailCm: 125,
  tailDm: 12.5,
};

console.log(compTail[`tail${"Cm"}`], `and`, compTail[`tail${"Dm"}`]);

// Task2

const compBox = {
  box1: 25,
  box2: 22345,
  box3: 2234115,
  box4: 2235,
  box5: 2,
};

for (let i = 0; i <= 4; i++) {
  console.log(
    compBox[
      `box${boxNum(i)}` // шаблонные строки
    ]
  );
}

function boxNum(index) {
  if (index === 0) {
    return "1";
  }

  if (index === 1) {
    return "2";
  }

  if (index === 2) {
    return "3";
  }
  if (index === 3) {
    return "4";
  }
  if (index === 4) {
    return "5";
  }
}
