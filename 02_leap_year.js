/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(year, divisor) {
  return year % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisible(year, 400)) {
    return true;
  }

  return !isDivisible(year, 100) && isDivisible(year, 4);
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function generateMessage(year, expected) {
  const firstSegment = 'Year "' + year + '" is leap "' + isLeapYear(year) + '"';
  const secondSegment = ' Should be "' + expected + '"';
  const message = firstSegment + secondSegment;

  return message;
}

function testIsLeapYear(year, expected) {
  const isPassed = expected === isLeapYear(year);

  console.log(getMark(isPassed) + generateMessage(year, expected));
}

function testAll() {
  testIsLeapYear(1900, false);
  testIsLeapYear(2024, true);
  testIsLeapYear(2000, true);
  testIsLeapYear(100, false);
  testIsLeapYear(1999, false);
  testIsLeapYear(2023, false);
}

testAll();
