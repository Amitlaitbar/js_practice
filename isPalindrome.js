function isPalindrome(string, start, end) {
  if (start > end) {
    return true;
  }

  const isBothCharsSimilar = string[start] === string[end];
  return isBothCharsSimilar ? isPalindrome(string, start + 1, end - 1) : false;
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function generateMessage(string, actual, expected) {
  const inputSegment = 'String "' + string + '" ';
  const firstSegment = 'Expected "' + expected + '"'
  const secondSegment = ' Actual "' + actual + '"';
  const message = inputSegment + firstSegment + secondSegment;

  return message;
}

function testSlice(string, expected) {
  const actual = isPalindrome(string, 0, string.length - 1)
  const isPassed = expected === actual;

  console.log(getMark(isPassed) + generateMessage(string, actual, expected));
}

function testAll() {
  testSlice('hello', false);
  testSlice('naman', true);
  testSlice('nama', false);
  testSlice('ama', true);
  testSlice('a m', false);
  testSlice('a a', true);
  testSlice('   ', true);
  testSlice(' A ', true);
  testSlice(' A', false);
}

testAll();