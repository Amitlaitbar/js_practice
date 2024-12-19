function isEven(number) {
  if (number === 0) {
    return true;
  }

  if (number === 1) {
    return false;
  }

  return isEven(number - 2);
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function generateMessage(number, expected) {
  const firstSegment = 'Number "' + number + '" is Even "';
  const secondSegment = isEven(number) + '" Should be "' + expected + '"';
  const message = firstSegment + secondSegment;

  return message;
}

function testIsEven(number, expected) {
  const isPassed = expected === isEven(number);

  console.log(getMark(isPassed) + generateMessage(number, expected));
}

function testAll() {
  testIsEven(4, true);
  testIsEven(1, false);
  testIsEven(2, true);
  testIsEven(3, false);
  testIsEven(9, false);
  testIsEven(120, true);
  testIsEven(12, true);
}

testAll();