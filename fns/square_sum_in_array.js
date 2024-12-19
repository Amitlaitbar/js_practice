const getSquare = function (element) {
  return element * element;
};

const getSum = function (sum, element) {
  return sum + element;
};

const sumOfSqOfAllElements = function (array) {
  return array.map(getSquare).reduce(getSum, 0);
};

console.log(sumOfSqOfAllElements([1,2,3,5]));