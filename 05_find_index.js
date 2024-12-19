/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

// const inputString = 'hello world'; const targetChar = 'o';
// const inputString = 'not found'; const targetChar = 'z';
// const inputString = 'repeating iiiiiiii'; const targetChar = 'i';

function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if (text[index] === target) {
      return index;
    }
  }
  
  return -1;
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function testFindIndex(text, target, expected) {
  const actual = findIndex(text, target);
  const isPassed = expected === actual;
  const message = 'Expected: "' + expected + '" Actual: "' + actual + '"';

  console.log(getMark(isPassed) + message);
}

function testAll() {
  testFindIndex('hello world', 'o', 4);
  testFindIndex('hello world', 'd', 10);
  testFindIndex('hello world', 'e', 1);
  testFindIndex('hello world', 'l', 2);
  testFindIndex('repeating iiiiiiii', 'i', 6);
  testFindIndex('not found', 'z', -1);
}

testAll();