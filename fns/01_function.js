const range = function (from, to) {
  const nums = [];

  for (let index = from; index <= to; index += 1) {
    nums.push(index);
  }

  return nums;
};

/* ==================> Factorial <================= */

const multiply = function (number, init) {
  return number * init;
};

const getFactorial = function (number) {
  return range(1, number).reduce(multiply, 1);
};

// console.log(getFactorial(4));

/* ======================>  String reverse <======================== */
const concat = function (init, char) {
  let result = init;
  return char + result;
};

const getReverseString = function (...string) {
  return string.reduce(concat, '');
};

// console.log(getReverseString(...'amit'));
// console.log(getReverseString(...'Naman'));

/* ======================> Reverse Array <======================== */

const reverseArray = function (init, element) {
  const reversedArray = [...init];

  reversedArray.unshift(element);

  return reversedArray;
};

const getReverseArray = function (array) {
  return array.reduce(reverseArray, []);
};

// console.log(getReverseArray([1, 2, 3, 4]));

/* ======================> nth Fibonacci number <======================== */

const getNextTerm = function (init, _, index) {
  const series = [...init];

  series.push(init[index] + init[index + 1]);

  return series;
};

const getNthTerm = function (array) {
  const fiboSeries = array.reduce(getNextTerm, [0, 1]);

  return fiboSeries[fiboSeries.length - 1];
};

const findNthTerm = function (termNo) {
  if (termNo <= 1) {
    return 0;
  }

  return getNthTerm(range(3, termNo));
};

// console.log(findNthTerm(7));

/* ======================> Second high Array <======================== */

// const secondHighest = function (array) {
//   let highestElement = -Infinity;
//   let secondHighest = -Infinity;

//   for (const element of array) {
//     secondHighest = highestElement;

//     if (highestElement < element) {
//       highestElement = element;
//     }
//   }

//   return secondHighest;
// };

const getSecondHighest = function ([highest, secondHighest], element) {
  if (highest < element) {
    return [element, highest];
  }

  if (secondHighest < element) {
    return [highest, element];
  }

  return [highest, secondHighest];
};

const findSecondHighest = function (array) {
  const highest = array.reduce(getSecondHighest, [-Infinity, -Infinity]);

  return highest[1];
};

console.log(findSecondHighest([1, 3, 5, 9, 100, 200, 900]));