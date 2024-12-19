/*
  Implement the below function that tells if a string is substring of another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function isSubStringPresent(string, subString, stringIndex) {
  for (let subStrIndex = 0; subStrIndex < subString.length; subStrIndex++) {
    if (subString[subStrIndex] !== string[stringIndex + subStrIndex]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  if (subString === '') {
    return false;
  }

  for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
    if (isSubStringPresent(string, subString, stringIndex)) {
      return true;
    }
  }

  return false;
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function testIsSubString(string, subString, expected) {
  const actual = isSubstring(string, subString);
  const isPassed = actual === expected;
  const message = 'Expected : "' + expected + '" Actual: "' + actual + '"';

  console.log(getMark(isPassed) + message);
}

function testAll() {
  testIsSubString('hello world', 'l', true);
  testIsSubString('hello world', 'll', true);
  testIsSubString('hello world', 'world', true);
  testIsSubString('hello world', 'zebra', false);
  testIsSubString('hello world', ' ', true);
  testIsSubString('hello world', '', false);
  testIsSubString('repeating iiiiiiii', 'iii', true);
  testIsSubString('', 'iii', false);
  testIsSubString('', '', false);
  testIsSubString('aaaa', 'aa', true);
  testIsSubString('ababb', 'abba', false);
}

testAll();