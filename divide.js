function divide(dividend, divisor, quetioent) {
  if (dividend < divisor) {
    return quetioent;
  }

  return divide(dividend - divisor, divisor, quetioent + 1);
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

function testDivide(number, divisor, expected) {
  const actual = divide(number, divisor, 0);
  const isPassed = expected === actual;

  console.log(getMark(isPassed) + generateMessage(number, actual, expected));
}

function testAll() {
  testDivide(3, 2, 1);
  testDivide(4, 2, 2);
  testDivide(26, 5, 5);
  testDivide(123, 100, 1);
 
}

testAll();