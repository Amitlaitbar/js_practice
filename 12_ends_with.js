/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function slice(string, subString) {
  const startIndex = string.length - subString.length;
  let slicedString = '';

  for (let index = startIndex; index <= string.length - 1; index++) {
    slicedString += string[index];
  }

  return slicedString;
}

function endsWith(string, subString) {
  if (subString === '') {
    return false;
  }

  return subString === slice(string, subString);
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function testEndsWith(string, subString, expected) {
  const actual = endsWith(string, subString);
  const isPassed = expected === actual;
  const segment = ' Expected: "' + expected + '" Actual: "' + actual + '"';
  const message = segment + ' Input: "' + string + '"';

  console.log(getMark(isPassed) + message);
}

function testAll() {
  testEndsWith('hello world', 'ld', true);
  testEndsWith('hello world', 'world', true);
  testEndsWith('hello world', 'wor', false);
  testEndsWith('hello world', 'd', true);
  testEndsWith('hello world', '', false);
  testEndsWith('', '', false);
  testEndsWith('', 'hello', false);
  testEndsWith('hello world', 'h', false);
  testEndsWith('this is cool', 'cool', true);
}

testAll();
