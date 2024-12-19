function multiply(multiplicand, multiplier) {
  if (multiplicand === 0 || multiplier === 0) {
    return 0;
  }

  if (multiplier === 1) {
    return multiplicand;
  }

  return multiplicand + multiply(multiplicand, multiplier - 1);
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function generateMessage(number, multiplier, expected) {
  const firstSegment = 'Product of "' + number + '" and "' + multiplier + '"';
  const secondSegment = ' is "' + multiply(number, multiplier) + '"';
  const expectedSegment = ' Should be "' + expected + '"';
  const message = firstSegment + secondSegment + expectedSegment;

  return message;
}

function testmultiply(number, multiplier, expected) {
  const isPassed = expected === multiply(number, multiplier);

  console.log(getMark(isPassed) + generateMessage(number, multiplier, expected));
}

function testAll() {
  testmultiply(0, 1, 0);
  testmultiply(3, 0, 0);
  testmultiply(1, 1, 1);
  testmultiply(2, 2, 4);
  testmultiply(3, 6, 18);
  testmultiply(4, 5, 20);
  testmultiply(12, 5, 60);
  testmultiply(6, 1, 6);
}

testAll();