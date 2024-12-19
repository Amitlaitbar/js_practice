function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number -1);
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function generateMessage(num, expected) {
  const firstSegment = 'Factorial of "' + num + '" is "' + factorial(num) + '"';
  const secondSegment = ' Should be "' + expected + '"';
  const message = firstSegment + secondSegment;

  return message;
}

function testFactorial(number, expected) {
  const isPassed = expected === factorial(number);

  console.log(getMark(isPassed) + generateMessage(number, expected));
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(4, 24);
  testFactorial(5, 120);
}

/*
factorial(5) -> line 6 -> 24 * 5 = 120
factorial(4) -> line 6 -> 6 * 4 = 24
factorial(3) -> line 6 -> 3 * 2 = 6
factorial(2) -> line 6 -> 2 * 1 = 2
factorial(1) -> line 6 -> 1 * 1 = 1
factorial(0) -> line 3 -> 1
*/