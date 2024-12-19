/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.1
    
    convert('F', 'K', 98.6) => 310.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C
    - C to F 
      (C * 9/5)+ 32 = F
    - C to K
      C + 273.15 = K
      

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
const CELSIUS = "C";
const KELVIN = "K";
const FAHRENHEIT = "F"

function convertFromCelsius(value, to) {
  if (to === FAHRENHEIT) {
    return 32 + (value * 9) / 5;
  }

  if (to === KELVIN) {
    return ((value * 100) + 27315) / 100;
  }

  return value;
}

function convertFromFahrenheit(value, to) {
  if (to === KELVIN) {
    return convertFromCelsius(convertFromFahrenheit(value, CELSIUS), KELVIN);
  }

  if (to === CELSIUS) {
    return (value - 32) * (5 / 9);
  }

  return value;
}

function convertFromKelvin(value, to) {
  if (to === FAHRENHEIT) {
    return convertFromCelsius(convertFromKelvin(value, CELSIUS), FAHRENHEIT);
  }

  if (to === CELSIUS) {
    return ((value * 100) - 27315) / 100;
  }

  return value;
}

function isValidUnit(temperature) {
  if (temperature === 'C' || temperature === 'K' || temperature === 'F') {
    return true;
  }

  return false;
}

function convert(from, to, value) {
  if (!isValidUnit(from) || !isValidUnit(to)) {
    return NaN;
  }

  switch (from) {
    case CELSIUS:
      return convertFromCelsius(+value, to);
    case KELVIN:
      return convertFromKelvin(+value, to);
    case FAHRENHEIT:
      return convertFromFahrenheit(+value, to);
  }
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function generateMessage(from, to, value, expected, actual) {
  const inputSegment = value + ' ' + from + '->' + to;
  const expectedSegment = '\nExpected: ' + expected;
  const actualSegment = '\nActual: ' + actual + '\n';
  const message = inputSegment + expectedSegment + actualSegment;

  return message;
}

function testTemperatureConversion(from, to, value, expected) {
  const actual = convert(from, to, value);
  const isPassed = expected === actual || "" + actual === "NaN";
  const generatedMessage = generateMessage(from, to, value, expected, actual);

  console.log(getMark(isPassed) + generatedMessage);
}

function testAll() {
  testTemperatureConversion('C', 'F', 37, 98.6);
  testTemperatureConversion('C', 'K', 0, 273.15);
  testTemperatureConversion('F', 'C', -40, -40);
  testTemperatureConversion('K', 'C', 100, -173.15);
  testTemperatureConversion('K', 'F', 100, -279.67);
  testTemperatureConversion('F', 'K', 98.6, 310.15);
  testTemperatureConversion('K', 'K', 98.6, 98.6);
  testTemperatureConversion('H', 'K', 98.6, NaN);
  testTemperatureConversion('H', 'G', 98.6, NaN);
  testTemperatureConversion('K', 'F', "100", -279.67);
  testTemperatureConversion('K', 'K', "abc", NaN);
  testTemperatureConversion('a', 'a', 34, NaN);
  testTemperatureConversion('K', 'C', 'hi', NaN);
  testTemperatureConversion('C', 'K', '0', 273.15);
}

testAll();
