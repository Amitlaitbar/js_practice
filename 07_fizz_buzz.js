/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
// const inputNumber = 3;
// const inputNumber = 5;
// const inputNumber = 7;
// const inputNumber = 0;

function isDivisible(number, divisor) {
  return number % divisor === 0;
}

function fizzBuzz(number) {
  if (isDivisible(number, 3) && isDivisible(number, 5)) {
    return "fizzbuzz";
  }

  if (isDivisible(number, 3)) {
    return "fizz";
  }

  if (isDivisible(number, 5)) {
   return "buzz";
  }

  return number + "";
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function testFizzBuzz(number, expected) {
  const actual = fizzBuzz(number);
  const isPassed = expected === actual;
  const message = 'Expected: "' + expected + '" Actual: "' + actual + '"';

  console.log(getMark(isPassed) + message);
}

function testAll() {
  testFizzBuzz(5, 'buzz');
  testFizzBuzz(3, 'fizz');
  testFizzBuzz(15, 'fizzbuzz');
  testFizzBuzz(30, 'fizzbuzz');
  testFizzBuzz(27, 'fizz');
  testFizzBuzz(11, '11');
  testFizzBuzz(0, 'fizzbuzz');
  testFizzBuzz(7, '7');
}

testAll();