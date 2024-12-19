/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function nthFibonacciTerm(n) {
  let firstTerm = 0;
  let secondTerm = 1;

  for (let iterator = 1; iterator < n; iterator++) {
    const nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
  }

  return firstTerm;
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function testNthFibonacciTerm(number, expected) {
  const actual = nthFibonacciTerm(number);
  const isPassed = actual === expected;
  const message = 'Expected: "' + expected + '" Actual: "' + actual + '"';

  console.log(getMark(isPassed) + message);
}

function testAll() {
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(8, 13);
}

testAll();