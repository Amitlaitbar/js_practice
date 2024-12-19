function slice(string, startIndex, endIndex) {
  if (string.length === 0 || startIndex > endIndex) {
    return '';
  }

  return string[startIndex] + slice(string, startIndex + 1, endIndex);
}

function replace(text, match, replacement) {
  if (text.length === 0) {
    return '';
  }

  const currentIndex = 0;
  const remainingText = slice(text, currentIndex + 1, text.length - 1);
  const isMatched = text[currentIndex] === match;
  const chatToAdd = isMatched ? replacement : text[currentIndex];

  return chatToAdd + replace(remainingText, match, replacement);
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function generateMessage(string, actual, expected) {
  const inputSegment = 'String "' + string + '" | ';
  const firstSegment = 'Expected "' + expected + '" |'
  const secondSegment = ' Actual "' + actual + '"';
  const message = inputSegment + firstSegment + secondSegment;

  return message;
}

function testReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const isPassed = expected === actual;

  console.log(getMark(isPassed) + generateMessage(text, actual, expected));
}

function testAll() {
  testReplace('A', 'A', 'G', 'G');
  testReplace('T', 'T', 'A', 'A');
  testReplace('This is my universe', ' ', '_', 'This_is_my_universe');
  testReplace('This_is_my_universe', '_', ' ', 'This is my universe');
  testReplace('', 'A', 'G', '');
  testReplace('Amit', 'H', 'G', 'Amit');
}

testAll();