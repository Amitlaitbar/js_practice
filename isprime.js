function isPrime(number, factor) {
  if (number < 2) {
    return false;
  }

  
  return number % factor === 0 ? factor === number : isPrime(number, ++factor);
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function generateMessage(actual, expected) {
  const firstSegment = 'Actual "' + actual + '"';
  const secondSegment = ' Should be "' + expected + '"\n';
  const message = firstSegment + secondSegment;

  return message;
}

function testIsPrime(number, factor, expected) {
  const actual = isPrime(number, factor)
  const isPassed = actual === expected;

  console.log(getMark(isPassed) + generateMessage(actual, expected));
}

function testAll() {
  const factor = 2;
  testIsPrime(5, factor, true);
  testIsPrime(2, factor, true);
  testIsPrime(9, factor, false);
  testIsPrime(0, factor, false);
  testIsPrime(1, factor, false);
  testIsPrime(29, factor, true);
  testIsPrime(31, factor, true);
  testIsPrime(13, factor, true);
  testIsPrime(7, factor, true);
  testIsPrime(49, factor, false);
}

testAll();