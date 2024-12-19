/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

// function isFactorOne(primeCandidate) {
//   let numberOfFactors = 0;

//   for (let divisor = 2; divisor <= primeCandidate; divisor++) {
//     const numberToAdd = primeCandidate % divisor === 0 ? 1 : 0;
//     numberOfFactors += numberToAdd;
//   }

//   return numberOfFactors === 1;
// }

function isPrime(primeCandidate) {
  for (let factor = 2; factor <= primeCandidate ** 0.5; factor++) {
    if (primeCandidate % factor === 0) {
      return false;
    }
  }

  return true;
}

function firstPrimeAbove(number) {
  if (number < 2) {
    return 2;
  }
  let primeCandidate = number + 1;

  while (!isPrime(primeCandidate)) {
    primeCandidate++;
  }

  return primeCandidate;
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function testFirstPrimeAbove(number, expected) {
  const actual = firstPrimeAbove(number);
  const isPassed = expected === actual;
  const message = 'Expected: "' + expected + '" Actual: "' + actual + '"';

  console.log(getMark(isPassed) + message);
}

function testAll() {
  testFirstPrimeAbove(5, 7);
  testFirstPrimeAbove(13, 17);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(19, 23);
  testFirstPrimeAbove(34, 37);
  testFirstPrimeAbove(91, 97);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(-5, 2);
  testFirstPrimeAbove(23, 29);
  testFirstPrimeAbove(4, 5);
}

testAll();