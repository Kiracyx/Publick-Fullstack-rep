function getRGBValues(ValueR = 0, ValueG = 0, ValueB = 0) {
  const calc = "rgb(" + ValueR + "," + ValueG + "," + ValueB + ")";
  return calc;
}
const result = getRGBValues(23, 100, 134);
console.log(result);

function avg(){
  console.log(arguments);

  return (num1+num2+num3)/arguments;
}

const avgRes = avg(5, 3);
console.log(avgRes);