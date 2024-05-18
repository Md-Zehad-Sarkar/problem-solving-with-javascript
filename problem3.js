`Task: Function Composition`;

`Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5`;

// square number
const squareNumber = (number) => {
  const squareNumber = Math.pow(number, 2);
  return squareNumber;
};
const square = squareNumber(4);
// console.log(square);

// double number
const doubleNumber = (number) => {
  const doubleNumber = number * 2;
  return doubleNumber;
};
const double = doubleNumber(5);
// console.log(double);

// add five
const addFive = (number) => {
  const addNumberWith5 = number + 5;
  return addNumberWith5;
};
const add5 = addFive(10);
// console.log(add5);

// function composition
const composeFn = (number) => {
  const squareDoubleAndAdd = addFive(doubleNumber(squareNumber(number)));
  return squareDoubleAndAdd;
};
const squareDoubleAndAdd = composeFn(6);
// console.log(squareDoubleAndAdd);
