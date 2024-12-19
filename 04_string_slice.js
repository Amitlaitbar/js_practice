/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

// const inputString = 'hello world'; const startIndex = 0; const endIndex = 4;
// const inputString = ''; const startIndex = 0; const endIndex = 10;
// const inputString = 'hello world'; const startIndex = 0; const endIndex = 0;
// const inputString = 'negative start'; const startIndex = -1; const endIndex = 8;
function min(start) {
  return start < 0 ? 0 : start;
}

function max(end, text) {
  return end >= text.length ? text.length - 1 : end;
}

function slice(text, start, end) {
  start = min(start);
  end = max(end, text);
  let slicedString = '';

  for (let index = start; index <= end; index++) {
    slicedString += text[index];
  }

  return slicedString;
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function testStringSlice(text, start, end, expected) {
  const actual = slice(text, start, end);
  const isPassed = actual === expected;

  const message = 'Expected: "' + expected + '" Actual: "' + actual + '"';

  console.log(getMark(isPassed) + message);
}

function testAll() {
  testStringSlice('hello world', 0, 4, 'hello');
  testStringSlice('negative start', -13, 7, 'negative');
  testStringSlice('hello world', 0, 15, 'hello world');
  testStringSlice('hello world', 6, 10, 'world');
  testStringSlice('hello', 0, 0, 'h');
}

testAll();