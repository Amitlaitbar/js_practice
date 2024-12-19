function getRemainder(divident, divisor) {
  if (divident < divisor) {
    return divident;
  }

  return getRemainder(divident - divisor, divisor);
}

function multiply(multiplicand, multiplier) {
  if (multiplicand === 0 || multiplier === 0) {
    return 0;
  }

  if (multiplier === 1) {
    return multiplicand;
  }

  return multiplicand + multiply(multiplicand, multiplier - 1);
}

function divide(divident, divisor, quetioent) {
  if (divident < divisor) {
    return quetioent;
  }

  return divide(divident - divisor, divisor, quetioent + 1);
}

function reverseNumber(number, reversedNumber) {
  const remainder = getRemainder(number, 10);
  console.log('remainder',remainder);
  
  reversedNumber = multiply(reversedNumber, 10) + remainder;
  console.log(multiply(reversedNumber, 10));
  // console.log(reversedNumber);
  

  return number < 10 ? reversedNumber : reverseNumber(divide(number, 10, 0));
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

function testReverseNumber(number, expected) {
  const actual = reverseNumber(number, 0);
  const isPassed = expected === actual;

  console.log(getMark(isPassed) + generateMessage(number, actual, expected));
}

function testAll() {
  testReverseNumber(22, 22);
  // testReverseNumber(123, 321);
  // testReverseNumber(345,543);
  // testReverseNumber(345,543);
}

testAll();