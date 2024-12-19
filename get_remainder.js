function getRemainder(divident, divisor) {
  if (divident < divisor) {
    return divident;
  }

  return getRemainder(divident - divisor, divisor);
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function generateMessage(number, actual, expected) {
  const inputSegment = 'Number "' + number + '" | ';
  const firstSegment = 'Expected "' + expected + '" |'
  const secondSegment = ' Actual "' + actual + '"';
  const message = inputSegment + firstSegment + secondSegment;

  return message;
}

function testReverseNumber(number, divisor, expected) {
  const actual = getRemainder(number,divisor);// reverseNumber(number);
  const isPassed = expected === actual;

  console.log(getMark(isPassed) + generateMessage(number, actual, expected));
}

function testAll() {
  testReverseNumber(3, 2, 1);
  testReverseNumber(4, 2, 0);
  testReverseNumber(26, 5, 1);
  testReverseNumber(123, 100, 23);
}

testAll();