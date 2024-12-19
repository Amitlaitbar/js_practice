const halfValue = function (number) {
  return number / 2;
};

const capitalise = function (string) {
  return string.toUpperCase();
};

const sqroots = function (array) {
  return array.map(Math.sqrt);
};

const getHalfValues = function (array) {
  return array.map(halfValue);
};

const getUpperCase = function (array) {
  return array.map(capitalise);
};

// console.log(sqroots([9, 4, 16]));
// console.log(getHalfValues([6, 7, 16]));
// console.log(getUpperCase(["this", "amazing", "assignment", "rocks"]));

// const map = function (mapper, arr) {
//   const result = [];

//   for (const element of arr) {
//     result.push(mapper(element));
//   }

//   return result;
// };

/* ======================================================================= */

const isOdd = function (number) {
  return number % 2 === 1;
};

const isLengthAbove = function (element) {
  return element.length > 5;
};

// const filter = function (predicater, arr) {
//   const result = [];

//   for (const element of arr) {
//     if (predicater(element)) {
//       result.push(element);
//     }
//   }

//   return result;
// };

const odds = function (array) {
  return array.filter(isOdd);
};

const getStringLengthAbove5 = function (array) {
  return array.filter(isLengthAbove);
};

console.log(odds([1, 4, 5]));
console.log(getStringLengthAbove5(["this", "amazing", "assignment", "rocks"]));

/* Sixth one:
Write a function that finds the longest string in an array.

Example: ["this","amazing", "assignment", "rocks"] => "assignment" */

const longestString = function (string1, string2) {
  return string1.length < string2.length ? string2 : string1;
};

const combine = function (string1, string2) {
  return string1 += string2;
};

const product = function (number1, number2) {
  return number1 * number2;
};

const oddCount = function (count, element) {
  return isOdd(element) ? count + 1 : count;
};

// const reduce = function (reducer, arr, resultContainer) {
//   let result = resultContainer;

//   for (let index = 0; index < arr.length; index += 1) {
//     result = reducer(result, arr[index]);
//   }

//   return result;
// };

const concat = function (...args) {
  return args.reduce(combine, '');
};

const getProduct = function (...elements) {
  return elements.reduce(product, 1);
};

const getLongestString = function (...strings) {
  return strings.reduce(longestString, '');
};

const getOddNumCount = function (...nums) {
  return nums.reduce(oddCount);
};

console.log(concat("ab", "so", "lu", "te"));
console.log(getProduct(1, 2, 3, 4));
console.log(getLongestString("this", "amazing", "assignment", "rocksssssss"));
console.log(getOddNumCount(1, 3, 5, 6, 7));


/*  =>>>> diamond Pattern */

[1, 3, 5, 3, 1].map(function (element, _, array) {
  const spaceCount = (array.length - element) / 2;

  return ' '.repeat(spaceCount) + '*'.repeat(element);
}).join('\n'); 