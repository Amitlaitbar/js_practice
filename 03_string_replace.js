/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
 
function replace(text, match, replacement) {
  let newString = "";

  for (let index = 0; index < text.length; index++) {
    const charToAdd = match === text[index] ? replacement : text[index];

    newString += charToAdd;
  }

  return newString;
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function testStringReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const isPassed = expected === actual;
  const message = getMark(isPassed) + '"' + text + '" -> "' + actual;

  console.log(message + '" Expected : "' + expected + '"\n');
}

function testAll() {
  testStringReplace('hello world', 'l', 'n', 'henno wornd');
  testStringReplace('no spaces in here', ' ', '_', 'no_spaces_in_here');
  testStringReplace('', 'd', 'e', '');
  testStringReplace('Welcome', 'W', 'w', 'welcome');
  testStringReplace('Welcome', '', 'y', 'Welcome');
  testStringReplace('Welcome', '', '', 'Welcome');
}

testAll();