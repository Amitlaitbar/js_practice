/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isEven(number) {
  let product = 1;

  for (let multiplier = 1; multiplier <= number; multiplier++) {
    product = product * multiplier;
  }

  return product;
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function generateMessage(num, expected) {
  const firstSegment = 'Factorial of "' + num + '" is "' + isEven(num) + '"';
  const secondSegment = ' Should be "' + expected + '"';
  const message = firstSegment + secondSegment;

  return message;
}

function testIsEven(number, expected) {
  const isPassed = expected === isEven(number);

  console.log(getMark(isPassed) + generateMessage(number, expected));
}

function testAll() {
  testIsEven(0, 1);
  testIsEven(1, 1);
  testIsEven(2, 2);
  testIsEven(3, 6);
  testIsEven(4, 24);
  testIsEven(5, 120);
}

testAll();