/* =================== Diamond =============== */

const nextOdd = function (init) {
  return [...init, init.at(-1) + 2];
};

const getDiamondArray = function (size) {
  const updatedSize = size & 1 ? size : size - 1;
  const length = Math.floor(updatedSize / 2);
  const halfArray = Array(length).fill(0).reduce(nextOdd, [1]);
  const [_, ...remaining] = [...halfArray].reverse();

  return halfArray.concat(remaining);
};

const row = function (size) {
  return function (element) {
    const spaceCount = (size - element) / 2;
    return ' '.repeat(spaceCount) + '*'.repeat(element);
  };
};

const makeDiamond = function (size) {
  const makeRow = row(size);
  return getDiamondArray(size).map(makeRow).join('\n');
};

console.log(makeDiamond(7), '\n');
console.log(makeDiamond(9));

/* ================= Counter ================== */

const createCounter = function () {
  let count = 0;

  return function () {
    return count += 1;
  };
};

const count = createCounter();

// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

/* ================= counter with incre & decre ========== */

const makeCounter = function (initValue) {
  let count = initValue;

  return function (input) {
    if (input === 'increment') {
      return count += 1;
    }

    if (input === 'decrement') {
      return count -= 1;
    }

    return count;
  };
};

const counter = makeCounter(8);

// counter('increment');
// counter('increment');
// console.log(counter('getCount'));
// counter('decrement');
// counter('decrement');
// console.log(counter('getCount'));
// counter('increment');
// counter('increment');
// counter('increment');
// console.log(counter('getCount'));

/* ================  */

