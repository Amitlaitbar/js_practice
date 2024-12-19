function slice(string, startIndex, endIndex) {
  if (string.length === 0 || startIndex > endIndex) {
    return '';
  }

  return string[startIndex] + slice(string, startIndex + 1, endIndex);
}

function reverseString(string) {
  if (string.length === 0) {
    return '';
  }

  const currentIndex = string.length - 1;
  const remainingString = slice(string, 0, currentIndex - 1);

  return string[currentIndex] + reverseString(remainingString);
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function generateMessage(actual, expected) {
  const firstSegment = 'Actual "' + actual + '"';
  const secondSegment = ' Should be "' + expected + '"';
  const message = firstSegment + secondSegment;

  return message;
}

function testSlice(string, expected) {
  const actual = reverseString(string);//slice(string, startIndex, endIndex)
  const isPassed = expected === actual;

  console.log(getMark(isPassed) + generateMessage(actual, expected));
}

function testAll() {
  testSlice('hello', 'olleh');
  testSlice('naman', 'naman');
  // testSlice('hello', 0, 1, 'he');
  //   testSlice('hello', 0, 3, 'hell');
  //   testSlice('hello', 3, 4, 'lo');
  //   testSlice('hello', 2, 3, 'll');
  //   testSlice('This is good', 8, 11, 'good');
  //   testSlice('This is good', 4, 6, ' is');
  //   testSlice('This is good', 0, 3, 'This');
  //   testSlice('', 0, 3, '');
  //   testSlice('hello', 5, 3, '');
  // 
}

testAll();