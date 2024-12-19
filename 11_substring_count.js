/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

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

function occurrences(string, subString) {
  let subStringOccurences = 0;

  if (subString === "") {
    return 0;
  }

  for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
    const isPresent = isSubStringPresent(string, subString, stringIndex);
    subStringOccurences += isPresent ? 1 : 0;
  }

  return subStringOccurences;
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function testOccurrences(string, subString, expected) {
  const actual = occurrences(string, subString);
  const isPassed = actual === expected;
  const message = 'Expected : "' + expected + '" Actual: "' + actual + '"';

  console.log(getMark(isPassed) + message);
}

function testAll() {
  testOccurrences('hello world', 'l', 3);
  testOccurrences('hello world', 'll', 1);
  testOccurrences('hello world', 'world', 1);
  testOccurrences('hello world', 'zebra', 0);
  testOccurrences('hello world', ' ', 1);
}

testAll();
