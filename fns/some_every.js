const isOdd = function (number) {
  return number % 2 === 1;
};

const isAbove100 = function (number) {
  return number > 100;
};

// const includes = function (predicate, array) {
//   for (const element of array) {
//     if (predicate(element)) {
//       return true;
//     }
//   }

//   return false;
// };

const isOddElementPresent = function (array) {
  return array.some(isOdd);
};

const isAbove100ElementPresent = function (array) {
  return array.some(isAbove100);
};

console.log(isOddElementPresent([2, 4, 8, 1]));
console.log(isOddElementPresent([2, 4, 8, 8]));
console.log(isAbove100ElementPresent([2, 4, 8, 800]));

const isPositive = function (number) {
  return number > 0;
};

const isLengthAbove3 = function (string) {
  return string.length > 3;
};

// const notIncludes = function (predicate, array) {
//   for (const element of array) {
//     if (!predicate(element)) {
//       return false;
//     }
//   }

//   return true;
// };

const areAllPositives = function (array) {
  return array.every(isPositive);
};

const isStringsLengthAbove3 = function (array) {
  return array.every(isLengthAbove3);
};

// console.log(areAllPositives([2, 4, 8, -1]));
// console.log(areAllPositives([2, 4, 8, 10]));
// console.log(isStringsLengthAbove3(["nottt", "or"]));
// console.log(isStringsLengthAbove3(["this", "that"]));

